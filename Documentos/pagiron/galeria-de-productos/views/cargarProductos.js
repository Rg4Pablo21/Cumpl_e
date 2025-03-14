import { productoAPI } from "../services/api.js";
import { crearProducto } from "../moduls/productos.js";

async function mostrarProductos() {
    try {
        let datos = await productoAPI();
        console.log(datos);
        todoslosProductos(datos);
    } catch (error) {
        console.error("Error: ", error);
    }
}

function todoslosProductos(datos) {
    let DOM = document.querySelector("#root");

    datos.forEach(element => {
        const producto = crearProducto({
            imgSrc: element.image,
            nombre: element.title,  
            precio: element.price, 
            descripcion: element.description 
        });

        DOM.appendChild(producto);
    });
}

export { mostrarProductos };