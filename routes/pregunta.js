const express = require('express');
const router = express.Router();
/*const {validatorCreateItem} = require ("../validators/curso");*/
const {getItems, getItem, createItem} = require ("../controllers/pregunta")

router.get("/", getItems);

router.post("/", /*validatorCreateItem,*/ createItem);




module.exports = router;