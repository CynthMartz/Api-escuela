const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: [true, 'El correo es obligatorio'],
        lowercase: true,
        
    },
    grupoId: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Grupo'
}
},
//se usa para rastrear cuando se guarda y se modifica la base de datos
{
    timestamps: true
});

AlumnoSchema.method('toJSON', function(){
    const {__v, ...object } = this.toObject();
    return object;
})

module.exports = mongoose.model('alumno', AlumnoSchema);
