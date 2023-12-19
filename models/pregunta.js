const mongoose = require('mongoose');

const PreguntaSchema = new mongoose.Schema({
    título:{
        type: String
    },
    descripción: {
        type: String,
        default: null,
    },
    estado: {
        type: String, 
    },
    capituloId: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'CapituloSchema' 
    }
},
{
    timestamps: true
});

PreguntaSchema.method('toJSON', function(){
    const {__v, ...object } = this.toObject();
    return object;
})
module.exports = mongoose.model('pregunta', PreguntaSchema);
