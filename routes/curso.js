const express = require('express');
const router = express.Router();
const {validatorCreateItem} = require ("../validators/curso");
const {getItems, getItem, createItem} = require ("../controllers/curso")

/*Listar los items*/ 
router.get("/", getItems);

/*Obtener detalle de item*/ 
router.post("/",validatorCreateItem, createItem);

/**Crear un registro */
router.post("/", )


module.exports = router;