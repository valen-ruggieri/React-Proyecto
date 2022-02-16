import React, { useState, useRef, useContext } from "react";
import { getFirestore } from "../firebase/firebase";
import firebase from "firebase";
import { cartContext } from "./context/Context";
import { Link } from "react-router-dom";

export default function Form() {
  const [orderId, setOrderId] = useState("");
  const { cart, totalCart, clearCart } = useContext(cartContext);
  const [submitOk, setSubmitOk] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();

  function sendData() {
    const dataBase = getFirestore();
    const orders = dataBase.collection("orders");
    alert("arranco");

    const myOrder = {
      buyer: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        mobile: mobileRef.current.value,
        city: cityRef.current.value,
        addres: addressRef.current.value,
      },
      items: cart,
      total: totalCart(),
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    orders
      .add(myOrder)
      .then(({ id }) => {
        console.log("orden ingresada: " + id);
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      });

    clearCart();
    setSubmitOk(true);
  }

  return (
    <>
      <body className="formBody">
        {orderId && <h1>Gracias por tu compra tu orden es: {orderId}</h1>}

        {!submitOk ? (
          <>
            <div className="formData">
              <h3>Ingresa tus datos</h3>
              <input
                type="text"
                name="name"
                ref={nameRef}
                placeholder="Nombre y apellido"
              />
              <br />
              <input
                type="text"
                name="email"
                ref={emailRef}
                placeholder="Correo"
              />
              <br />
              <input
                type="text"
                name="mobile"
                ref={mobileRef}
                placeholder="Numero de telefono"
              />
              <br />
              <input
                type="text"
                name="city"
                ref={cityRef}
                placeholder="Ciudad"
              />
              <br />
              <input
                type="text"
                name="address"
                ref={addressRef}
                placeholder="Direccion"
              />
              <br />
              <button onClick={() => sendData()}>Listo!</button>
              <br />
            </div>
          </>
        ) : (
          <>
            <h3 className="submitOk">Datos enviados correctamente ✅ </h3>
            <br/>
            <button className="buttonVolver"> <Link
              to={"/home"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
             Volver al home
            </Link></button>
          </>
        )}
      </body>
    </>
  );
}
