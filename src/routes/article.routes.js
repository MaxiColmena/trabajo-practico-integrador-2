import { Router } from "express";

export const articleRoutes = Router();

articleRoutes.get("/articles", getAllArticles);
articleRoutes.get("/articles", getAllArticleById);
articleRoutes.put("/articles", updateArticle);
articleRoutes.delete("/articles", deleteArticle);