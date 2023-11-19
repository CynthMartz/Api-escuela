const mongoose = require('mongoose');

const grupoSchema = new mongoose.Schema({
    id_grupo: {
        type: String,
        required: true
    },
    nombre: { 
        type: String, 
        required: true
    },
    grado: { 
        type: Number, 
        required: true 
    },

    alumno: [{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'Alumno' 
    }]
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Grupo', grupoSchema);

