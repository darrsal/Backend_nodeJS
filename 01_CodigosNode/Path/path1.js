const path=require('path');

const ruta1=path.join(__dirname,'lista.txt');
const ruta2=path.join(__filename,'lista.txt');

console.log(ruta1);
console.log(ruta2);