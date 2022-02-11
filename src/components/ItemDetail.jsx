import React from "react";
import Loader from "./Loader";

export default function productoDetail({ item }) {
  return (
    <>
      <section className="itemDetailContainer">
        <div className="itemDetail">
          <img className="imgItemDetail" src={item.img} />
        </div>
        <div className="itemDetail">
          {" "}
          <h3>{item.nombre}</h3>
          <h4>Precio: $ {item.precio}</h4>
          <h4>Stock: {item.stock}u</h4>
          <h5>{item.detail}</h5>
        </div>
      </section>
    </>
  );
}
