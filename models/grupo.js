const mongoose = require('mongoose');

const GrupoSchema = new mongoose.Schema({
    id_grupo: {
        type: Number,
        required: true
    },
    nombre_grupo: { 
        type: String, 
        required: true
    },
    periodo: { 
        type: String, 
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('grupo', GrupoSchema);

