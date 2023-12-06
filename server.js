require("dotenv").config()
const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const dbConnect = require ('./config/mongo')

// Importa tus modelos
//const Alumno = require('./models/alumno');
//const Calificacion = require('./models/calificacion');
//const Capitulo = require('./models/capitulo');
//const Curso = require('./models/curso');
//const Grupo = require('./models/grupo');
//const Modulo = require('./models/modulo');
//const Pregunta = require('./models/pregunta');


const app = express()
app.use(cors())
app.use(express.json())


dbConnect()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

//app.use("/api", require("./routes"))


//renombrar alumno
const fs = require ('fs');
fs.renameSync("./models/Alumno.js", "./models/alumno.js");

