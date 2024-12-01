import prisma from "../db/prisma.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user.id;
        let conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
                    hasEvery: [senderId, recieverId],
                }
            }
        });
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participantIds: {
                        set: [senderId, recieverId],
                    }
                }
            });
        }
        const newMessage = await prisma.message.create({
            data: {
                senderId,
                body: message,
                conversationId: conversation.id
            }
        });
        if (newMessage) {
            conversation = await prisma.conversation.update({
                where: { id: conversation.id },
                data: { messages: {
                        connect: {
                            id: newMessage.id
                        }
                    } }
            });
        }
        //socket io
        const recieverSocketId = getReceiverSocketId(recieverId);
        if (recieverSocketId) {
            io.to(recieverSocketId).emit("newMessage", newMessage);
        }
        res.status(201).json(newMessage);
    }
    catch (error) {
        console.log("Error in message", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user.id;
        const conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
                    hasEvery: [userToChatId, senderId]
                }
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            }
        });
        if (!conversation) {
            return res.status(200).json([]);
        }
        res.status(200).json(conversation.messages);
    }
    catch (error) {
        console.log("Error in message", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const getUsersForSidebar = async (req, res) => {
    try {
        const authUserId = req.user.id;
        const users = await prisma.user.findMany({
            where: {
                id: {
                    not: authUserId
                }
            },
            select: {
                id: true,
                fullname: true,
                profilePic: true
            }
        });
        res.status(200).json(users);
    }
    catch (error) {
        console.log("Error in message", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};