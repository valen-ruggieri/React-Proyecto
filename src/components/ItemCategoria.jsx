import React from "react";
import ContStock from "./ContStock";
import { Link } from "react-router-dom";

export default function categoriaListaCategoria({ categoriaLista }) {
  function onAdd() {
    alert(
      `${categoriaLista.nombre} añadida al carrito quedan en stock ${categoriaLista.stock}`
    );
  }

  return (
    <>
      <article className="itemList">
        <Link to={`/itemDetail/${categoriaLista.id}`}>
          <img
            width={"260px"}
            height={"260px"}
            className="imgItem"
            src={categoriaLista.img}
            alt={categoriaLista.nombre}
          />{" "}
        </Link>

        <h3>{categoriaLista.nombre}</h3>

        <h4>Precio: $ {categoriaLista.precio} </h4>
        <h4>Stock: {categoriaLista.stock}u</h4>
        <button onClick={() => onAdd()}>Agregar Al Carro</button>

        <ContStock tope={categoriaLista.stock} />
      </article>
    </>
  );
}
