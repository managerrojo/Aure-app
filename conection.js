const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');


const objetoDB = mongoose.connection

objetoDB.on('connected', ()=>{console.log('conexion a la base de datos correcta');})
objetoDB.on('error', ()=>{console.log('conexion a la base de datos INcorrecta');})


module.exports = mongoose