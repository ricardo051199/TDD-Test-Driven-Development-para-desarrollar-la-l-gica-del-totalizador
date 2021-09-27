import {mostrar_cantidad, mostrar_precio} from "./App";

const form = document.querySelector("#totalizador_de_venta-form");
const cantidad = document.querySelector("#cantidad-input");
const p = document.querySelector("#totalizado");
const precio = document.querySelector("#precio-input");
const a = document.querySelector("#cantidad");
const b = document.querySelector("#precio");

form.addEventListener("submit", (event) => {

    // Denegar la actualizacion de la pagina
    event.preventDefault();

    // Mensaje de alerta
    a.innerHTML = mostrar_cantidad(cantidad.value);
    b.innerHTML = mostrar_precio(precio.value);
});