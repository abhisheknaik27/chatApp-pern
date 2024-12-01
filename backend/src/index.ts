import express from 'express';
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from "path";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5005;
const __dirname = path.resolve();

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);


if(process.env.NODE_ENV !== "development"){
    app.use(express.static(path.join(__dirname, "/client/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
    })
}
//frontend: localhost:5173
//backend: localhost:5005

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));