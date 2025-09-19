import { Router } from "express";

export const tagRoutes = Router();

tagRoutes.get("/tags", getAllTags);
tagRoutes.get("/tags", getATagById);
tagRoutes.put("/tags", updateTag);
tagRoutes.delete("/tags", deleteTag);