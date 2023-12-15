const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
    id_alumno:{
        type: Number,
       // required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: [true, 'El correo es obligatorio'],
        lowercase: true,
        
    },
    //id_grupo: { 
    //    type: mongoose.Schema.Types.ObjectId, ref: 'Grupo'
    //}
},

//se usa para rastrear cuando se guarda y se modifica la base de datos
{
    timestamps: true
});

module.exports = mongoose.model('alumno', AlumnoSchema);

//const Alumno = mongoose.model('alumno', AlumnoSchema);
//module.exports = Alumno;