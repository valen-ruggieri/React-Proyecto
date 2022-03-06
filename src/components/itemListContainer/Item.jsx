import React, { useContext, useState } from "react";
import ContStock from "./ContStock";
import { Link } from "react-router-dom";
import { cartContext } from "../context/Context";
import "./itemListContainer.css";

import Loader from "./Loader";

export default function ItemCategoria({ item , promise }) {
  const { addToCart } = useContext(cartContext);
  const [addItem, setAddItem] = useState(false);
  

  function onAdd(cant) {
    alert(`${item.nombre} añadida al carrito + ${cant}`);
    addToCart(item, cant);
    setAddItem(true);
  }



  return (
    <>
      {promise ? (
        <article className="itemList">
          <Link to={`/itemDetail/${item.id}`}>
            <img
              width={"250px"}
              height={"200px"}
              className="imgItem"
              src={item.img}
              alt={item.nombre}
            />{" "}
          </Link>

          <h3>{item.nombre}</h3>

          <h4>Precio: $ {item.precio} </h4>
          <h4>Stock: {item.stock}u</h4>

          {addItem ? (
            <button>
              <Link
                to={"/cart"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Ir al Carrito
              </Link>
            </button>
          ) : (
            <ContStock tope={item.stock} onAdd={onAdd} />
          )}
        </article>
      ) : (
        <Loader />
      )}
    </>
  );
}
