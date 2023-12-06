const mongoose = require('mongoose');

const CapituloSchema = new mongoose.Schema({
    id_capitulo: {
        type: String,
        required: true
    },
    nombre_capitulo: {
        type: String,
        required: true 
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('capitulo', CapituloSchema);
