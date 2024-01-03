require("dotenv").config()
const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const dbConnect = require ('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000


/*API rest*/ 
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});
dbConnect()

//renombrar alumno
//const fs = require ('fs');
//fs.renameSync("./models/Alumno.js", "/models/alumno.js");


