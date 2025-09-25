import { body } from "express-validator";

export const createUserValidation = [
  body("useName")
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Debe ingresar un nombre de usuario valido"),
  body("email")
    .notEmpty()
    .isString()
    .isEmail()
    .withMessage("Debe ingresar un email valido"),
  body("password")
    .notEmpty()
    .isString()
    .withMessage("Debe ingresar una contraseña valida"),
  body("role")
    .notEmpty()
    .isIn(["user", "admin"])
    .withMessage("Debe ingresar un rol valido (admin, user)"),
  body("profile.firstname")
    .notEmpty()
    .isString()
    .isLength({ min: 2, max: 50 })
    .withMessage("Debe ingresar un nombre valido"),
  body("profile.lastname")
    .notEmpty()
    .isString()
    .isLength({ min: 2, max: 50 })
    .withMessage("Debe ingresar un apellido valido"),
  body("profile.biography")
    .optional()
    .isString()
    .isLength({ max: 500 })
    .withMessage("Debe ingresar una biografia valida"),
  body("profile.avatarUrl")
    .optional()
    .isString()
    .isURL()
    .withMessage("Debe ingresar una URL valida del avatar"),
  body("profile.birthdate")
    .optional()
    .isString()
    .isDate()
    .withMessage("Debe ingresar una fecha valida"),
];

export const updateUserValidation = [];