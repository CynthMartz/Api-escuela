const express = require('express');
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require ("../validators/pregunta");
const {getItems, getItem, createItem, updateItem, deleteItem} = require ("../controllers/pregunta")

/*Listar los items*/ 
router.get("/", getItems);

/*Obtener detalle de item*/ 
router.get("/:id", validatorGetItem, getItem);

/**Crear un registro */ 
router.post("/",validatorCreateItem, createItem);

/**Actualizar un registro */ 
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/*Eliminar un item*/ 
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;