import React, { useState } from "react";

export default function   ItemCount(){
    
  ItemCount = ({ stock, initial }) => {

  const [contador, setcontador] = useState(initial);

  return (

    <div className="contador">
      <div>
        <button
          className="botonDeMenos"onClick={() => {
            if (contador > 1) {
              setcontador(contador - 1);}}}>
          -
        </button>

        {contador}

        <button className="botonDeMas" onClick={() => {
            if (contador < stock) {
              setcontador(contador + 1);}}}>
          +

        </button>

      </div>

      <button className="agregarCarrito">Agregar al carrito</button>

    </div>


  );
};

};

