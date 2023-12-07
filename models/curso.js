const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
    id_curso: {
        type: Number
    },
    nombre_curso: { 
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

module.exports = mongoose.model('curso', CursoSchema);

