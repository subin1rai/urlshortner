import express from "express";
const router = express.Router();
import { register, login, me ,logout} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", authMiddleware, me);
export default router;
