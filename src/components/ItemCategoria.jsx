import React, { useState } from "react";
import ContStock from "./ContStock";
import { Link } from "react-router-dom";

export default function ItemCategoria({ categoriaLista }) {
  const [addItem, setAddItem] = useState(false);

  function onAdd(cant) {
    alert(`${categoriaLista.nombre} añadida al carrito + ${cant}`);
    setAddItem(true);
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

        {addItem ? (
          <Link to={"/cart"}>Ir al Carrito</Link>
        ) : (
          <ContStock tope={categoriaLista.stock} onAdd={onAdd} />
        )}
      </article>
    </>
  );
}
