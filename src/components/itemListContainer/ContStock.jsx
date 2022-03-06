import React, { useState } from "react";
import "./contStock.css";

export default function ContStock({ tope, onAdd}) {
  const [cantidad, setCantidad] = useState(0);

  function sumar() {
    if (cantidad < tope) setCantidad(cantidad + 1);
  }

  function restar() {
    if (cantidad > 0) setCantidad(cantidad - 1);
  }

  return (
    <>
      <button onClick={() => onAdd(cantidad)}>Agregar Al Carro</button>
     
      <span className="containerMasMenos">
      <button className="buttonMasMenos" onClick={() => restar()}>
        -
      </button>
      <>{cantidad}</>
      <button className="buttonMasMenos" onClick={() => sumar()}>
        +
      </button>
      </span>
      
      
    </>
  );
}
