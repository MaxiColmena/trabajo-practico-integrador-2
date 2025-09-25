import { Router } from "express";
import { registerUser, loginUser, getUserProfile, updateUseProfile, logoutUser } from "../controllers/auth.controllers.js";
import { createUserValidation } from "../middlewares/validations/auth.validations.js";
export const authRoutes = Router();

authRoutes.post("/auth/register", createUserValidation, registerUser);
authRoutes.post("/auth/login", loginUser);
authRoutes.get("/auth/profile", getUserProfile);
authRoutes.put("/auth/profile", updateUseProfile);
authRoutes.put("/auth/logout", logoutUser);