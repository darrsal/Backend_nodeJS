const fs = require('fs').promises;

//Leer el archivo, si esta imprimie el contenido o error
fs.readFile('lista.txt', 'utf8')
    .then(data => {
        console.log(data);
        console.log('Promesa cumplida');
    })
    .catch(err => {
        console.error(err);
    });

    //Leer el archivo, si esta imprimie el contenido o error
fs.readFile('no_existe.txt', 'utf8')
.then(data => {
    console.log(data);
    console.log('Promesa cumplida');
})
.catch(err => {
    console.error(err);
});
