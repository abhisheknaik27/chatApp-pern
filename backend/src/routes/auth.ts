import express, { RequestHandler } from "express";
import { signin, login, logout, getMe } from "../controllers/authController.js"
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

//prefix: <url>/api/auth

router.get('/me', protectRoute as RequestHandler, getMe);
router.post("/signin", signin as RequestHandler);
router.post('/login', login as RequestHandler);
router.post('/logout', logout);
// router.post('/logout', logout);



export default router;