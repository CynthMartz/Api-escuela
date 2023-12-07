const mongoose = require('mongoose');

const CalificacionSchema = new mongoose.Schema({
    id_calificacion:{
        type: Number,
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
    id_alumno: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'AlumnoSchema', 
        required: true 
    },
    id_pregunta: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'PreguntaSchema', 
        required: true 
    }
    
},
{
    timestamps: true
});

module.exports = mongoose.model('calificacion', CalificacionSchema);
