var socket = io();

//On escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servdor');

})

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})

//Enviar informacion
socket.emit('enviarMensaje', {
    // usuario: 'Orlando',
    mensaje: 'Hola cabrones !!'
}, function(resp) { //Funcion que se ejecuta cuando el envio fue correcto
    console.log('Servidor: ', resp)
})

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje)
})