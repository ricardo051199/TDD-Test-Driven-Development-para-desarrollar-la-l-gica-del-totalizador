import {mostrar_cantidad, mostrar_precio, mostrar_estado, mostrar_precio_total, calcular_precio_total} from "./App";

const form = document.querySelector("#totalizador_de_venta-form");
const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const estado = document.querySelector("#estado-input");
const a = document.querySelector("#cantidad");
const b = document.querySelector("#precio");
const c = document.querySelector("#estado");
const d = document.querySelector("#precio_total");

form.addEventListener("submit", (event) => {

    // Variables
    var precio_total;

    // Denegar la actualizacion de la pagina
    event.preventDefault();

    // Calcular precio total
    precio_total = calcular_precio_total(cantidad.value, precio.value);

    // Mensajes
    a.innerHTML = mostrar_cantidad(cantidad.value);
    b.innerHTML = mostrar_precio(precio.value);
    c.innerHTML = mostrar_estado(estado.value);
    d.innerHTML = mostrar_precio_total(precio_total);
});