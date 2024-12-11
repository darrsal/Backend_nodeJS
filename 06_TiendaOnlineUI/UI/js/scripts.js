document.addEventListener('DOMContentLoaded', () => {
    const btnAddProducto = document.getElementById('btnAddProducto');
    const btnListProductos = document.getElementById('btnListProductos');
    const tableProductos = document.getElementById('tableProductos');
    const formProducto = document.getElementById('formProducto');
    const formProductoElement = document.getElementById('formProductoElement');


    btnAddProducto.addEventListener('click', () => {
        formProducto.style.display = 'block';
    });

    //btnListProductos.addEventListener('click', () => {
        
    //});

    formProductoElement.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;

        const response = await fetch('/productos/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, precio })
        });

        if (response.ok) {
            const nuevoProducto = await response.json();
            mostrarProducto(nuevoProducto);
            formProductoElement.reset();
            formProducto.style.display = 'none';
            console.log("Producto agregado ", nuevoProducto);
        }
    });

    async function cargarProductos() {
        const response = await fetch('/productos/all');
        const productos = await response.json();
        productos.forEach(mostrarProducto);

        console.log(JSON.stringify(productos));
    }

    function mostrarProducto(producto) {
        var fila = tableProductos.insertRow(-1);
        var cell1 = fila.insertCell(0);
        var cell2 = fila.insertCell(1);
        cell1.innerHTML = producto.nombre;
        cell2.innerHTML = producto.precio;
    }

    cargarProductos();
});