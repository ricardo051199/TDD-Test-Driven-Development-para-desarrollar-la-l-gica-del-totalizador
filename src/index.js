import {mostrar_cantidad, mostrar_precio, mostrar_estado} from "./App";

const form = document.querySelector("#totalizador_de_venta-form");
const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const estado = document.querySelector("#estado-input");
const a = document.querySelector("#cantidad");
const b = document.querySelector("#precio");
const c = document.querySelector("#estado");

form.addEventListener("submit", (event) => {

    // Denegar la actualizacion de la pagina
    event.preventDefault();

    // Mensaje de alerta
    a.innerHTML = mostrar_cantidad(cantidad.value);
    b.innerHTML = mostrar_precio(precio.value);
    c.innerHTML = mostrar_estado(estado.value);
});