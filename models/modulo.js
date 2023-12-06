const mongoose = require('mongoose');

const ModuloSchema = new mongoose.Schema({
    id_modulo: {
        type: String,
        required: true
    },
    nombre_modulo: { 
        type: String, 
        required: true 
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('modulo', ModuloSchema);

