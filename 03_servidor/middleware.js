const express=require('express');
const app=express();
const port=3000;

const logger=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

app.get('/',(req,res)=>{
    res.send('Mensaje enviado');
});

app.listen(port, ()=>{
    console.log(`Servidor activo http://localhost:${port}`)
})