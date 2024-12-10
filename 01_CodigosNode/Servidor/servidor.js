//Crear servidor HTTP simple
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola, Node.js! \n');

});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor en ejecución en http://127.0.0.1:3000/');
});