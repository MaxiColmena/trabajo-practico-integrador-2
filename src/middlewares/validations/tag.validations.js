import { body } from "express-validator";

export const createTagValidation = [
    body("name")
    .trim()
    .notEmpty()
    .isString()
    .isLength({ min: 2, max: 30 })
    .withMessage("El nombre de la etiqueta debe tener entre 2 y 30 caracteres")
    .matches(/^\S+$/)
    .withMessage("El nombre de la etiqueta no puede contener espacios"),
  body("description")
    .optional()
    .trim()
    .isString()
    .isLength({ max: 200 })
    .withMessage("La descripción no puede superar los 200 caracteres"),
]

export const updateTagValidation = [
    body("name")
    .optional()
    .trim()
    .notEmpty()
    .isString()
    .isLength({ min: 2, max: 30 })
    .withMessage("El nombre de la etiqueta debe tener entre 2 y 30 caracteres")
    .matches(/^\S+$/)
    .withMessage("El nombre de la etiqueta no puede contener espacios"),
  body("description")
    .optional()
    .trim()
    .isString()
    .isLength({ max: 200 })
    .withMessage("La descripción no puede superar los 200 caracteres"),
]

// 3. Tag (Etiqueta)
// ● _id (ObjectId automático)
// ● name (String, único, 2-30 caracteres, sin espacios)
// ● description (String, opcional, máximo 200 caracteres)
// ● createdAt (Date)
// ● updatedAt (Date)