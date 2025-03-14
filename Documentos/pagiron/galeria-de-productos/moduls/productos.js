export function crearProducto({ imgSrc, nombre, precio, descripcion }) {
    // Crear contenedor principal
    const producto = document.createElement("div");
    producto.classList.add("producto");

    // Crear imagen
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = nombre;
    producto.appendChild(img);

    // Crear nombre del producto
    const titulo = document.createElement("h2");
    titulo.textContent = nombre;
    producto.appendChild(titulo);

    // Crear precio
    const precioElemento = document.createElement("p");
    precioElemento.textContent = `Precio: $${precio}`;
    precioElemento.classList.add("precio");
    producto.appendChild(precioElemento);

    // Crear descripción
    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;
    producto.appendChild(descripcionElemento);

    return producto;
}