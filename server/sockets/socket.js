const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario Conectado');

    //==enviarMensaje es el nombre del objeto mensaje que sera capturado del lado del cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido wey !'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)

        /*
        if (mensaje.usuario) {
            callback({ //ERespuesta que se envia al usuario 
                resp: 'TODO SALIO BIEN'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL'
            });
        }
        */
    })
})