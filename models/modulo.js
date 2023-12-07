const mongoose = require('mongoose');

const ModuloSchema = new mongoose.Schema({
    id_modulo: {
        type: Number,
        required: true
    },
    nombre_modulo: { 
        type: String, 
        required: true 
    },
    id_curso: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Curso' 
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('modulo', ModuloSchema);

