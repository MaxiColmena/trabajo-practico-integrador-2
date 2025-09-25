import { body } from "express-validator";

export const createCommentValidation = [
  body("content")
    .trim()
    .isString()
    .isLength({ min: 5, max: 500 })
    .withMessage("El contenido del comentario debe tener entre 5 y 500 caracteres"),
    body("author")
    .notEmpty()
    .isMongoId()
    .withMessage("Debe ingresar un ID de autor valido"),
    body("article")
    .notEmpty()
    .isMongoId()
    .withMessage("Debe ingresar un ID de articulo valido"),
]


// ● _id (ObjectId automático)
// ● content (String, 5-500 caracteres)
// ● author (ObjectId, referencia a User)
// ● article (ObjectId, referencia a Article - relación 1:N)
// ● createdAt (Date)
// ● updatedAt (Date)