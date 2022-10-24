
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    codigo: {
        type: String,
        required: false,
    },
    nombre: {
        type: String,
        default: 'CRISTIAN VLADIMIR GARCIA AYALA - 2534672017',
    },
    nombreproyecto: {
        type: String,
        required: false,
    },
    monto: {
        type: String,
        required: false,
    },
    paisqueejecuta: {
        type: String,
        default: 'GT',
    },
    fecha: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    fechacierre:{
        type: String,
        default: null,  
    }
});

module.exports = model( 'Usuario', UsuarioSchema); 
