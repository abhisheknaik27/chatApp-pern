import express, { RequestHandler } from "express";
import { signin, login } from "../controllers/authController.js"

const router = express.Router();

//prefix: <url>/api/auth

router.post("/signin", signin as RequestHandler);
router.post('/login', login as RequestHandler);

// router.post('/logout', logout);



export default router;