const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validatorCreateItem = [
    check("nombre")
    .exists()
    .notEmpty(),
    check("apellido")
    .exists()
    .notEmpty(),
    check("edad")
    .exists()
    .notEmpty(),
    check("celular")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty(),
    check("grupoId")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

module.exports = {validatorCreateItem };