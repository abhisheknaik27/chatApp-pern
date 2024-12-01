import express from 'express';
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { app, server } from "./socket/socket.js";

dotenv.config();



app.use(cookieParser());
app.use(express.json());


const PORT = process.env.PORT || 5005;

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));