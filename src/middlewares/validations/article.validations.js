import { body } from "express-validator";

export const createArticleValidation = [
  body("title")
    .trim()
    .isString()
    .isLength({min: 3, max:200})
    .withMessage("Debe ingresarnun nombre valido para el titulo"),
    body("content")
    .trim()
    .isString()
    .isLength({min: 50})
    .withMessage("El contenido debe tener al menos 50 caracteres"),
    body("excerpt")
    .optional()
    .trim()
    .isString()
    .isLength({max: 500})
    .withMessage("El extracto no puede superar los 500 caracteres"),
    body("status")
    .optional()
    .isIn(["published", "archived"])
    .withMessage("El estado debe ser 'published' o 'archived'"),
    body("author")
    .notEmpty()
    .isMongoId()
    .withMessage("Debe ingresar un ID de autor valido"),
    
]


// 2. Article (Artículo)
// ● _id (ObjectId automático)
// ● title (String, 3-200 caracteres)
// ● content (String, mínimo 50 caracteres)
// ● excerpt (String, máximo 500 caracteres, opcional)

// ● status (String, enum: 'published', 'archived', default: 'published')
// ● author (ObjectId, referencia a User)
// ● tags (Array de ObjectIds, referencias a Tag - relación N:M)
// ● createdAt (Date)
// ● updatedAt (Date)