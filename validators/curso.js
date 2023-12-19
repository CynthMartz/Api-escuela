/*const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validatorCreateItem = [
    check("id_curso")
    .exists()
    .notEmpty(),
    check("nombre_curso")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validatorResults(req, res, next)
    }
];

module.exports = {validatorCreateItem };

*/