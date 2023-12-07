const mongoose = require('mongoose');

const PreguntaSchema = new mongoose.Schema({
    id_pregunta: {
        type: Number,
        required: true
    },
    title:{
        type: String
    },
    description: {
        type: String,
        default: null,
    },
    estado: {
        type: String, 
    },
    id_capitulo: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'CapituloSchema' 
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('pregunta', PreguntaSchema);
