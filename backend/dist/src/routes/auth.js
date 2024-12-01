import express from "express";
import { signin, login, logout, getMe } from "../controllers/authController.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();
//prefix: <url>/api/auth
router.get('/me', protectRoute, getMe);
router.post("/signin", signin);
router.post('/login', login);
router.post('/logout', logout);
// router.post('/logout', logout);
export default router;
