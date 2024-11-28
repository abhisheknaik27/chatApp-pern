import express, { RequestHandler } from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getMessage, sendMessage, getUsersForSidebar } from "../controllers/messageController.js";
const router = express.Router();


router.get('/conversations', protectRoute as RequestHandler, getUsersForSidebar);
router.post('/send/:id', protectRoute as RequestHandler, sendMessage);
router.get('/:id', protectRoute as RequestHandler, getMessage as RequestHandler);

export default router;
