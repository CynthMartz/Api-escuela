const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem} = require ("../controllers/modulo")

router.get("/", getItems);

router.post("/", createItem);




module.exports = router