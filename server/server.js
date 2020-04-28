const express = require('express');
const socketIO = require('socket.io');
const http = require('http')
const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO es la comunicacion del backend
//Exportamos el modulo para que lo podamos importar en el archivo de sockets
module.exports.io = socketIO(server);
//Importamos el archivo de socket.js para que ejecute la instruccion
require('./sockets/socket')


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});