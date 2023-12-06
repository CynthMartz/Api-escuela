const mongoose = require('mongoose');

const GrupoSchema = new mongoose.Schema({
    id_grupo: {
        type: String,
        required: true
    },
    nombre_grupo: { 
        type: String, 
        required: true
    },
    periodo: [{ 
        type: String, 
        required: true
    }]
},
{
    timestamps: true
}
);

module.exports = mongoose.model('grupo', GrupoSchema);

