const mongoose = require('mongoose');

const capituloSchema = new mongoose.Schema({
    id_capitulo: {
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
    curso: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Curso', 
        required: true 
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Capitulo', capituloSchema);
