const mongoose = require('mongoose');

const CapituloSchema = new mongoose.Schema({
    nombre_capitulo: {
        type: String,
        required: true 
    },
    moduloId: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'ModuloSchema' 
    }
},
{
    timestamps: true
}
);
CapituloSchema.method('toJSON', function(){
    const {__v, ...object } = this.toObject();
    return object;
})

module.exports = mongoose.model('capitulo', CapituloSchema);
