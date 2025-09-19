import { Router } from "express";

export const userRoutes = Router();

userRoutes.get("/users", getAllUsers);
userRoutes.get("/users", getAUserById);
userRoutes.put("/users", updateUser);
userRoutes.delete("/users", deleteUser);