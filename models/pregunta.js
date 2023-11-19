const mongoose = require('mongoose');

const preguntaSchema = new mongoose.Schema({
    id_pregunta: {
        type: String,
        required: true
    },
    title:{
        type: String
    },
    description: {
        type: String,
        default: null,
    },
    respuestas: {
        type: String, 
        required: true 
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Pregunta', preguntaSchema);
