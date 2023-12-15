const mongoose = require('mongoose');

const ModuloSchema = new mongoose.Schema({
    id_modulo: {
        type: Number,
        required: true
    },
    nombre_modulo: { 
        type: String, 
        required: true 
    },
    curso: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Curso' 
    }
},
{
    timestamps: true
});

ModuloSchema.method('toJSON', function(){
    const {__v, ...object } = this.toObject();
    return object;
})



module.exports = mongoose.model('modulo', ModuloSchema);

