import React, { useContext, useState } from "react";
import ContStock from "./ContStock";
import { Link } from "react-router-dom";
import { cartContext } from "./Context";

export default function Item({ item }) {
  const { addToCart } = useContext(cartContext);

  const [added, setAdded] = useState(false);

  function onAdd(cant) {
    alert(`${item.nombre} añadida al carrito + ${cant}`);
    addToCart(item, cant);
    setAdded(true);
  }

  return (
    <>
      <article className="itemList">
        <Link to={`itemDetail/${item.id}`}>
          <img
            width={"260px"}
            height={"260px"}
            className="imgItem"
            src={item.img}
            alt={item.nombre}
          />{" "}
        </Link>

        <h3>{item.nombre}</h3>

        <h4>Precio: $ {item.precio} </h4>
        <h4>Stock: {item.stock}u</h4>

        {added ? (
          <Link to={"/cart"}>Ir al Carrito</Link>
        ) : (
          <ContStock tope={item.stock} onAdd={onAdd} />
        )}
      </article>
    </>
  );
}
