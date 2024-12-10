const EventEmitter = require('events');
const emisor = new EventEmitter();

emisor.on('evento', () => {
    console.log('Evento realizado');
});

emisor.emit('evento');