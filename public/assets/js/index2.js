function agregarProducto(event) {
    const card = event.target.closest('.cont');

    const producto = {
        nombre: card.querySelector('h2').innerText,
        descripcion: card.querySelector('p:nth-of-type(1)').innerText,
        precio: card.querySelector('.precio').innerText,
        cuotas: card.querySelector('.cuotas').innerText,
        imagen: card.querySelector('img').src,
    };

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.push(producto);

    localStorage.setItem('carrito', JSON.stringify(carrito));

    renderizarCarrito();

    alert('Producto agregado al carrito!');
}

function renderizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carritowf');

    carritoContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }

    carrito.forEach((producto, index) => {
        const itemHTML = `
            <div class="carrito-item">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-imagen">
            <div class="carrito-info">
                <h4 class="carrito-nombre">${producto.nombre}</h4>
                <p class="carrito-descripcion">${producto.descripcion}</p>
                <p class="carrito-cuotas">Cuotas: ${producto.cuotas}</p>
            </div>
            <div>
                <p>Precio: ${producto.precio}</p>
                <button onclick="eliminarProducto(${index})" class="btn btn-danger btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
                </button>
            </div>
        </div>
        <hr>
        `;
        carritoContainer.innerHTML += itemHTML;
    });

    const total = carrito.reduce((sum, producto) => sum + parseFloat(producto.precio.replace('$', '')), 0);
    carritoContainer.innerHTML += `<h3>Total: $${total.toFixed(3)}</h3>`;
}

function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarCarrito();
}

document.querySelectorAll('.btn-agregar').forEach(button => {
    button.addEventListener('click', agregarProducto);
});

document.addEventListener('DOMContentLoaded', renderizarCarrito);





