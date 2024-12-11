document.addEventListener('DOMContentLoaded',()=>{
    const btnAddProducto=document.getElementById('btnAddProducto');
    const tableProductos=document.getElementById('tableProductos');
    const formProducto=document.getElementById('formProducto');
    const formProductoElement=document.getElementById('formProductoElement');
});

btnAddProducto.addEventListener('click',()=>{
    formProducto.style.display='block';
});

formProductoElement.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const nombre=document.getElementById('nombre').value;
    const precio=document.getElementById('precio').value;

    const response=await fetch('/productos/add',{
        
    });
});

async function cargarProductos(){
    const response=await fetch('/productos/all');
    const productos=await response.json();
    productos.forEach(mostrarProducto);
}

function mostrarProducto(producto){
    const li=document.createElement('li');
    li.textContent=``;
}