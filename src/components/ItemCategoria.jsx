import React, { useContext, useEffect, useState } from "react";
import ContStock from "./ContStock";
import { Link } from "react-router-dom";
import { cartContext } from "./Context";
import Loader from "./Loader";

export default function ItemCategoria({ categoriaLista , categoriaId}) {
  const { addToCart } = useContext(cartContext);
  const [addItem, setAddItem] = useState(false);
  const [promise , setPromise] = useState(false);

  function onAdd(cant) {
    alert(`${categoriaLista.nombre} añadida al carrito + ${cant}`);
    addToCart(categoriaLista, cant);
    setAddItem(true);
  }
  
useEffect(()=>{

  setTimeout(()=>{

    setPromise(true);
    console.log("useeffect")
  },2000);
},[categoriaId])


  return (
    <>
      {promise ? (
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
      ) : (
        <Loader />
      )}
    </>
  );
}
