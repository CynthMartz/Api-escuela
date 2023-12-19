const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validatorCreateItem = [
    check("nombre_grupo")
    .exists()
    .notEmpty(),
    check("periodo")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

module.exports = {validatorCreateItem };