import { Request, RequestHandler, Response } from "express";
import prisma from "../db/prisma.js";
import bcryptjs from 'bcryptjs';
import generateToken from "../utils/generateToken.js";

export const signin = async (req: Request, res: Response) => {
    try {
        const { username, fullname, password, confirmPassword, gender } = req.body;
        
        if(!username || !fullname || !password || !confirmPassword || !gender){
            return res.status(400).json({ error: "Fill all the fields" });
        }

        if(password !== confirmPassword){
            return res.status(400).json({ error: "Password do not match" });
        }

        const user = await prisma.user.findUnique({ where:{ username } });
        if(user){ 
            return res.status(400).json({ error: "Username already exists" });
        };

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await prisma.user.create({
            data: {
                username,
                fullname,
                password: hashedPassword,
                gender,
                profilePic: gender === 'male' ? boyProfile : girlProfile
            }
        });

        if(newUser){
        generateToken(newUser.id, res);
        res
          .status(201)
          .json({
              id: newUser.id,
              fullname: newUser.fullname,
              username: newUser.username,
              profilePic: newUser.profilePic
            });
        } else{
            res.status(400).json({ error: "Invalid User Data" });
        }
    } catch (error: any) { 
        console.log('Error in signup controller', error.message);  
        res.status(500).json({ message: "Internal Server Error" });
    }
};



export const login = async (req: Request, res: Response) => {
    try {
        res.send('hey');
    } catch (error) {
        console.log(error);
    }
};

// export const logout = async (req: Request, res: Response) => {
    
// };