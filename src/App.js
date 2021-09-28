function mostrar_cantidad(cantidad){
    return "Cantidad : " + cantidad;
}

function mostrar_precio(precio){
    return "El precio del item es : " + precio + " $";
}

function mostrar_estado(estado){
    return "El codigo de estago es : " + estado;
}

function mostrar_precio_total(precio){
    return "Precio total : " + precio + " $";
}

function calcular_precio_total(cantidad, precio, estado){
    return cantidad * precio;
}


export {mostrar_cantidad, mostrar_precio, mostrar_estado, mostrar_precio_total, calcular_precio_total};