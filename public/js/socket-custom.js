var socket = io();

//Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor');
});

//Enviar información
//socket.emit('enviarMensaje', '123');
socket.emit('enviarMensaje', {
    usuario: 'Patrick',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(resp) {
    console.log('Servidor: ', resp);
});