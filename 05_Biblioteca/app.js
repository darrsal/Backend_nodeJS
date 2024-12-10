const express = require('express');
const app = express();
const port = 3000;

//Middleware
app.use(express.json());

//Dato de ejemplo
let libros = [
    { id: 1, titulo: 'Las mil y una noches', editoral: 'Editorial Alma' },
    { id: 2, titulo: 'Cien año de soledad', editoral: 'Sudamericana de Buenos Aires' },
    { id: 3, titulo: 'Ensayo sobre la ceguera', editoral: 'Grupo Santillana' },
];

//Endpoint ver lista de libros
app.get('/libros', (req, res) => {
    res.json(libros);
});

//Endpoint agregar un libro
app.post('/libros', (req, res) => {
    const nuevoLibro = req.body;
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
    console.log("Libro agregado ", nuevoLibro);
});

//Endpoint quitar un libro
app.delete('/libros/:id', (req, res) => {
    const { id } = req.params;
    libros = libros.filter(libros => libros.id !== parseInt(id));
    res.status(204).send();
    console.log("Libro eliminado ", id);
});

//Endpoint obtener un libro
app.get('/libros/:id', (req, res) => {
    const { id } = req.params;
    librosFiltrado = libros.filter(libros => libros.id === parseInt(id));
    res.json(librosFiltrado);
});

//Escuchar al servidor
app.listen(port, () => {
    console.log(`Servidor biblioteca escuchando en http://localhost:${port}`);
});