import {mostrar_cantidad, mostrar_precio, mostrar_estado, mostrar_precio_total, calcular_precio_total, calcular_descuento} from "./App";

describe("Sumar", () => {
  it("deberia mostrar la cantidad", () => {
    expect(mostrar_cantidad()).toEqual('Cantidad : undefined');
    expect(mostrar_cantidad(0)).toEqual('Cantidad : 0');
    expect(mostrar_cantidad(10)).toEqual('Cantidad : 10');
  });

  it("deberia mostrar el precio", () => {
    expect(mostrar_precio()).toEqual('El precio del item es : undefined $');
    expect(mostrar_precio(0)).toEqual('El precio del item es : 0 $');
    expect(mostrar_precio(10)).toEqual('El precio del item es : 10 $');
  });

  it("deberia mostrar el estado", () => {
    expect(mostrar_estado()).toEqual('El codigo de estago es : undefined');
    expect(mostrar_estado('texas')).toEqual('El codigo de estago es : texas');
  });

  it("deberia calcular el precio total", () => {
    expect(calcular_precio_total()).toEqual(NaN);
    expect(calcular_precio_total(2, 2)).toEqual(4);
    expect(calcular_precio_total(0, 2)).toEqual(0);
    expect(calcular_precio_total(2, 0)).toEqual(0);
  });

  it("deberia mostrar el precio total", () => {
    expect(mostrar_precio_total()).toEqual('Precio total : undefined $');
    expect(mostrar_precio_total(0)).toEqual('Precio total : 0 $');
    expect(mostrar_precio_total(10)).toEqual('Precio total : 10 $');
  });
});