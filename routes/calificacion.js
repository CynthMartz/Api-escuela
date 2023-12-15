const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem} = require ("../controllers/calificacion")

router.get("/", getItems);

router.post("/", createItem);




module.exports = router