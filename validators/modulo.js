const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validatorCreateItem = [
    check("nombre_modulo")
    .exists()
    .notEmpty(),
    check("cursoId")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];
const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

module.exports = {validatorCreateItem, validatorGetItem };