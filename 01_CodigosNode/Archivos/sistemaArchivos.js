const fs = require('fs');

//Leer el archivo, si esta imprimie el contenido o error
fs.readFile('lista.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

//Excribir el archivo
fs.writeFile('salida.txt','Este es el curso Node JS', (err)=>{
    if (err) {
        console.error(err);
        return;
    }
    console.log('Archivo escrito');
});