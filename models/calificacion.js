const mongoose = require('mongoose');

const CalificacionSchema = new mongoose.Schema({
    tipo:{
        type: String,
        required: true
    },
    nota:{
        type: Number,
        required: true
    },
    fecha: { 
        type: Date, 
        required: true, 
        default: Date.now() 
    },
    alumnoId: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'AlumnoSchema', 
        required: true 
    },
    preguntaId: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'PreguntaSchema', 
        required: true 
    }
    
},
{
    timestamps: true
});

CalificacionSchema.method('toJSON', function(){
    const {__v, ...object } = this.toObject();
    return object;
})

module.exports = mongoose.model('calificacion', CalificacionSchema);
