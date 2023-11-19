require("dotenv").config()
const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')

// Importa tus modelos
const Alumno = require('./models/Alumno');
const Calificacion = require('./models/calificacion');
const Capitulo = require('./models/capitulo');
const Curso = require('./models/curso');
const Grupo = require('./models/grupo');
const Modulo = require('./models/modulo');
const Pregunta = require('./models/pregunta');

const dbConnect = require ('./config/mongo')
const app = express()
app.use(cors())
app.use(express.json())


dbConnect()

//routes

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/blog', (req, res) => {
    res.send('Hello Welcome to my  Blog, My name is Cynthia')
})

app.get('/alumno', async(req, res) => {
    try {
        const alumno = await Alumno.find({});
        res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//id
app.get('/alumno/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const alumno = await Alumno.findById(id);
        res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/alumno', async(req, res) => {
    try{
        const alumno = await Alumno.create(req.body)
        res.status(200).json(alumno);

    } catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update
app.put('/alumno/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const alumno = await Alumno.findByIdAndUpdate(id, req.body);
        // No podemos encontrar ningun alumno en la base de datos
        if(!alumno){
            return res.status(404).json({message: `No encontramos al alumno con ID ${id}`})
        }
        const updatedAlumno = await Alumno.findById(id);
        res.status(200).json(updatedAlumno);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Delete

app.delete('/alumno/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const alumno = await Alumno.findByIdAndDelete(id);
        if(!alumno){
            return res.status(404).json({message: `No encontramos al alumno con ID ${id}`})
        }
        res.status(200).json(alumno);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

