const mongoose = require('mongoose');

const GrupoSchema = new mongoose.Schema({
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

GrupoSchema.method('toJSON', function(){
    const {__v, ...object } = this.toObject();
    return object;
})

module.exports = mongoose.model('grupo', GrupoSchema);

