const express = require('express')
const app = express()


/* importndo conexion conexion a monogodb  */
const archivoBD = require('./conection');



/* set server  */

app.listen(5000, ()=>{
    console.log('the server is running correclty');
})