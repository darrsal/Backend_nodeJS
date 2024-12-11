const exp = require('constants');
const express = require('express');
const path=require('path');
const app = express();
const port = 3000;


app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

let productos=[];

app.get('/productos/all',(req,res)=>{
    res.json(productos);
});

app.post('/productos/add', (req, res) => {
    const nuevoPto = req.body;
    productos.push(nuevoPto);
    res.status(201).json(nuevoPto);
    console.log("Producto agregado ", nuevoPto);
});

//Escuchar al servidor
app.listen(port, () => {
    console.log(`Servidor tienda escuchando en http://localhost:${port}`);
});