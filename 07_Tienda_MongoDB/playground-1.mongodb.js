/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'tienda_online';

// The current database to use.
use(database);

db.productos.insertMany([
    {
        nombre:"Monitor Gamer Xundefined",
        precio:3700,
        desc:"Xundefined 32 165 Hz X320cr01 Rgb Luces 1500r"
    },
    {
        nombre:"Silla Escritorio",
        precio:1400,
        desc:"Silla Escritorio Ejecutiva Oficina Secretarial Ergonomica"
    },
    {
        nombre:"Batería auto",
        precio:2600,
        desc:"Batería Lth 12v 340 Amperes Modelo L-ns40l-340"
    }  

]);

db.productos.find();