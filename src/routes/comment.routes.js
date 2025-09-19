import { Router } from "express";

export const commentRoutes = Router();

commentRoutes.get("/comments", getAllComments);
commentRoutes.get("/comments", getACommentById);
commentRoutes.put("/comments", updateComment);
commentRoutes.delete("/comments", deleteComment);