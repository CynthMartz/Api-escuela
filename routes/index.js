const express = require('express');
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname; //ruta absoluta

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file)
    if(name !== 'index'){
        console.log('cargando rutas')
        router.use(`/${name}`, require(`./${file}`))
    }
})






module.exports = router