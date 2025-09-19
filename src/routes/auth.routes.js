import { Router } from "express";

export const authRoutes = Router();

authRoutes.post("/auth/register", registerUser);
// authRoutes.post("/auth/login", loginUser);
// authRoutes.get("/auth/profile", getUserProfile);
// authRoutes.put("/auth/profile", updateUseProfile);
// authRoutes.put("/auth/logout", logoutUser);