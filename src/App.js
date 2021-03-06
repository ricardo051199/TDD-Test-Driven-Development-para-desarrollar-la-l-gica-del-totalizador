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

function calcular_precio_cantidad(cantidad, precio){
    return cantidad * precio;
}

function calcular_descuento(precio_total){

    if(precio_total >= 30000){
        return 0.15 * precio_total;
    }

    if(precio_total >= 10000){
        return 0.1 * precio_total;
    }

    if(precio_total >= 7000){
        return 0.07 * precio_total;
    }

    if(precio_total >= 3000){
        return 0.05 * precio_total;
    }

    if(precio_total >= 1000){
        return 0.03 * precio_total;
    }

    if(precio_total < 1000){
        return 0;
    }
}

function calcular_impuesto(estado, precio){
    if(estado == "UT"){
        return 0.0665 * precio;
    }

    if(estado == "NV"){
        return 0.08 * precio;
    }

    if(estado == "TX"){
        return 0.0625 * precio;
    }

    if(estado == "AL"){
        return 0.04 * precio;
    }

    if(estado == "CA"){
        return 0.0825 * precio;
    }
}

function calcular_precio_total(cantidad, precio, estado){
    var precio_cantidad = calcular_precio_cantidad(cantidad, precio);
    var descuento = calcular_descuento(precio_cantidad)
    var precio_venta = precio_cantidad - descuento;
    var impuesto = calcular_impuesto(estado, precio_venta)
    return precio_venta + impuesto;
}


export {mostrar_cantidad, mostrar_precio, mostrar_estado, mostrar_precio_total, calcular_precio_cantidad, calcular_descuento, calcular_impuesto, calcular_precio_total};