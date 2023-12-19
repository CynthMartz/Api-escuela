const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
    nombre_curso: { 
        type: String, 
        required: true 
    }
},

{
    timestamps: true
}
);

module.exports = mongoose.model('curso', CursoSchema);

