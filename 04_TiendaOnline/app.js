const express = require('express');
const app = express();
const port = 3000;

//Middleware
app.use(express.json());

//Dato de ejemplo
let productos = [
    { id: 1, nombre: 'IPHONE 13 pro', precio: 15000 },
    { id: 2, nombre: 'HUAWEI p70', precio: 14000 },
    { id: 3, nombre: 'XIAOMI 14T', precio: 10000 },
];

//Endpoint ver lista de productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

//Endpoint agregar un producto
app.post('/productos', (req, res) => {
    const nuevoPto = req.body;
    productos.push(nuevoPto);
    res.status(201).json(nuevoPto);
    console.log("Producto agregado ", nuevoPto);
});

//Endpoint quitar un producto
app.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    productos = productos.filter(productos => productos.id !== parseInt(id));
    res.status(204).send();
    console.log("Producto eliminado ", id);
});

//Endpoint obtener un producto
app.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    productosFiltrado = productos.filter(productos => productos.id === parseInt(id));
    res.json(productosFiltrado);
});

//Escuchar al servidor
app.listen(port, () => {
    console.log(`Servidor tienda escuchando en http://localhost:${port}`);
});