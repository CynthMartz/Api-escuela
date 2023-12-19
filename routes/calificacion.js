const express = require('express');
const router = express.Router();
const {validatorCreateItem} = require ("../validators/calificacion");
const {getItems, getItem, createItem} = require ("../controllers/calificacion")

/*Listar los items*/ 
router.get("/", getItems);

/*Obtener detalle de item*/ 
router.post("/",validatorCreateItem, createItem);




module.exports = router