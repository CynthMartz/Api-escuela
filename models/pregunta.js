const mongoose = require('mongoose');

const PreguntaSchema = new mongoose.Schema({
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
    estado: {
        type: String, 
        required: true 
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('pregunta', PreguntaSchema);
