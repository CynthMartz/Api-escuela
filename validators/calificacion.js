const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validatorCreateItem = [
    check("tipo")
    .exists()
    .notEmpty(),
    check("nota")
    .exists()
    .notEmpty(),
    check("fecha")
    .exists()
    .notEmpty(),
    check("alumnoId")
    .exists()
    .notEmpty()
    .isMongoId(),
    check("preguntaId")
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

module.exports = {validatorCreateItem,validatorGetItem };