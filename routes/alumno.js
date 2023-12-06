const express = require('express');
const router = express.Router();

router.get("/alumno", (req, res) =>{
    const data = ["hola", "soy cynthia"]

    res.send ({data})
})




module.exports = router