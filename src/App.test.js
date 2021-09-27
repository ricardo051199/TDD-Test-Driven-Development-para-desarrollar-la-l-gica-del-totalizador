import mostrar_cantidad from "./App.js";

describe("Sumar", () => {
  it("deberia mostrar la cantidad", () => {
    expect(mostrar_cantidad(2)).toEqual('Cantidad : 2');
    expect(mostrar_cantidad()).toEqual('Cantidad : undefined');
  });
});