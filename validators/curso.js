const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validatorCreateItem = [
    check("nombre_curso")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

module.exports = {validatorCreateItem };