function promesaEjemplo(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Promesa resuelta');
        },3000);
    })
}

promesaEjemplo().then(mensaje=>{
    console.log(mensaje);
});