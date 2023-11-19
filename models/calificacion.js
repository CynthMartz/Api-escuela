const mongoose = require('mongoose');

const calificacionSchema = new mongoose.Schema({
    alumno: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', 
        required: true 
    },
    curso: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Curso', 
        required: true 
    },
    modulo: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Modulo', 
        required: true 
    },
    pregunta: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Pregunta', 
        required: true 
    },
    fecha: { 
        type: Date, required: true, default: Date.now() 
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Calificacion', calificacionSchema);
