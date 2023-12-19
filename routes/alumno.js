const express = require('express');
const router = express.Router();
const {validatorCreateItem} = require ("../validators/alumno");
const {getItems, getItem, createItem} = require ("../controllers/alumno")

/*Listar los items*/ 
router.get("/", getItems);

/*Obtener detalle de item*/ 
router.post("/",validatorCreateItem, createItem);




module.exports = router