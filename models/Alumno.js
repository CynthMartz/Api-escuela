const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    
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
        required: [true, 'El correo es obligatorio'],
        lowercase: true,
    },
},
//se usa para rastrear cuando se guarda y se modifica la base de datos
{
    timestamps: true
}
)

//module.exports = mongoose.model('Alumno', alumnoSchema);

const Alumno = mongoose.model('Alumno', alumnoSchema);
module.exports = Alumno;