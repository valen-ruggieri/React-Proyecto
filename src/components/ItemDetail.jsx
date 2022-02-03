import React from "react";
import Loader from "./Loader";

export default function productoDetail({ producto }) {
  return (
    <>
      {producto.id ? (
        <>
          <section className="itemDetailContainer">
            <div className="itemDetail">
              <img className="imgItemDetail" src={producto.img} />
            </div>
            <div className="itemDetail">
              {" "}
              <h3>{producto.nombre}</h3>
              <h4>Precio: $ {producto.precio}</h4>
              <h4>Stock: {producto.stock}u</h4>
              <h5>{producto.detail}</h5>
            </div>
          </section>
        </>
      ) : (
        <>
          <Loader/>
        </>
      )}
    </>
  );
}
