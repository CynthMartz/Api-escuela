const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validatorCreateItem = [
    check("título")
    .exists()
    .notEmpty(),
    check("descripción")
    .exists()
    .notEmpty(),
    check("estado")
    .exists()
    .notEmpty(),
    check("capituloId")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

module.exports = {validatorCreateItem };