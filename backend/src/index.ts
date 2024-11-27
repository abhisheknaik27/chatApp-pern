import express from 'express';
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = 2005;

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));