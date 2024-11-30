//global.d.ts is a special file, types added here can be used globally in project w/o importing them

type ConversationType = {
    id: string;
    fullname: string;
    profilePic: string;
}

type MessageType = {
    id: string;
    body: string;
    senderId: string;
    createdAt: string;
}
