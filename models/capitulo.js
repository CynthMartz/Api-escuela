const mongoose = require('mongoose');

const CapituloSchema = new mongoose.Schema({
    id_capitulo: {
        type: Number,
        required: true
    },
    nombre_capitulo: {
        type: String,
        required: true 
    },
    id_modulo: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'ModuloSchema' 
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('capitulo', CapituloSchema);
