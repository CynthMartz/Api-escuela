const express = require('express');
const router = express.Router();
/*const {validatorCreateItem} = require ("../validators/curso");*/
const {getItems, getItem, createItem} = require ("../controllers/curso")

router.get("/", getItems);

router.post("/", /*validatorCreateItem,*/ createItem);




module.exports = router;