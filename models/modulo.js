const mongoose = require('mongoose');

const moduloSchema = new mongoose.Schema({
    //id_modulo: {
     //   type: String,
       // required: true
   // },
    nombre: { 
        type: String, 
        required: true 
    },
    descripcion: { 
        type: String,
        required: true 
    },
    alumno: {
        type: mongoose.Schema.Types.ObjectId, ref: 'alumno',
        required: true 
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Modulo', moduloSchema);

