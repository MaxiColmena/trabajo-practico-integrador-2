import { Router } from "express";
import { getTags, getTagById, updateTag, deleteTag } from "../controllers/tag.controllers.js";
import { createTagValidation, updateTagValidation } from "../middlewares/validations/tag.validations.js";
export const tagRoutes = Router();

tagRoutes.post("/tags", createTagValidation, updateTag);
tagRoutes.get("/tags", getTags);
tagRoutes.get("/tags", getTagById);
tagRoutes.put("/tags", updateTagValidation, updateTag);
tagRoutes.delete("/tags", deleteTag);