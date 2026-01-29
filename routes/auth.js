import {
    forgotPassword,
    protectedRoute,
    publicRoute,
    resetPassword,
    login,
    register
} from "../controllers/authcontroller.js";

import { authMiddleware } from "../middleware/authmiddleware.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/protected", authMiddleware, protectedRoute);
router.get("/public", publicRoute);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
export default router;
