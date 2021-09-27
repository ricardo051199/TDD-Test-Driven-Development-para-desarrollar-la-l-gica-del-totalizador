import {mostrar_cantidad, mostrar_precio, mostrar_estado} from "./App";

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
});