const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    id_curso: {
        type: String,
        required: true
    },
    nombre: { 
        type: String, 
        required: true 
    },
    descripcion: { 
        type: String, 
        required: true 
    },
    nivel: { 
        type: String, 
        required: true 
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Curso', cursoSchema);

