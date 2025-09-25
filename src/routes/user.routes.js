import { Router } from "express";
import { getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controllers.js";
import { updateUserValidation } from "../middlewares/validations/user.validations.js";

export const userRoutes = Router();


userRoutes.get("/users", getAllUsers);
userRoutes.get("/users", getUserById);
userRoutes.put("/users", updateUserValidation, updateUser);
userRoutes.delete("/users", deleteUser);