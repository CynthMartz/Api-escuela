const mongoose = require('mongoose');

const CalificacionSchema = new mongoose.Schema({
    id_calificacion:{
        type: String,
        required: true 
    },
    tipo:{
        type: String,
        required: true
    },
    nota:{
        type: Number,
        required: true
    },
    fecha: { 
        type: Date, 
        required: true, 
        default: Date.now() 
    },
    alumno: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', 
        required: true 
    },
    pregunta: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Pregunta', 
        required: true 
    }
    
},
{
    timestamps: true
}
);

module.exports = mongoose.model('calificacion', CalificacionSchema);
