import express from "express";
const router = express.Router();
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getAllUserUrls } from "../controller/user.controller.js";


router.get("/urls", authMiddleware, getAllUserUrls);

export default router;
