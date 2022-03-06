import React, { useState, useRef, useContext} from "react";
import { getFirestore } from "../../firebase/firebase";
import firebase from "firebase";
import { cartContext } from "../context/Context";
import { Link } from "react-router-dom";
import "./form.css";

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

    const myOrder = {
      buyer: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        mobile: mobileRef.current.value,
        city: cityRef.current.value,
        address: addressRef.current.value,
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

  function validarCampos() {
    let validacion = false;
    const valorName = nameRef.current.value;
    const valorTel = mobileRef.current.value;
    const valorAddress = addressRef.current.value;
    const valorEmail = emailRef.current.value;
    const valorCity = cityRef.current.value;
    while (validacion == false) {
      if (
        (valorName && valorTel && valorAddress && valorEmail && valorCity) != ""
      ) {
        validacion = true;
        sendData();
      } else {
        alert("No llenaste todos los campos");
        validacion = true;
        break;
      }
    }
  }

  return (
    <>
    <body className="formBody">
      <section className="formSection">
        {orderId && <h1>Gracias por tu compra tu orden es:   {orderId}</h1>}

        {!submitOk ? (
          <>
            <div className="formData">
              <h3>INGRESA TUS DATOS</h3>
              <input
                type="text"
                name="name"
                ref={nameRef}
                placeholder="Nombre y apellido"
                id="nameInput"
              />

              <br />
              <input
                type="text"
                name="email"
                ref={emailRef}
                placeholder="Correo"
                id="emailInput"
              />

              <br />
              <input
                type="text"
                name="mobile"
                ref={mobileRef}
                placeholder="Numero de telefono"
                id="mobileInput"
              />

              <br />

              <input
                type="text"
                name="city"
                ref={cityRef}
                placeholder="Ciudad"
                id="cityInput"
              />

              <br />
              <input
                type="text"
                name="address"
                ref={addressRef}
                placeholder="Direccion"
                id="addressInput"
              />

              <br />
              <button onClick={() => validarCampos()}>Listo!</button>
              <br />
            </div>
          </>
        ) : (
          <>
            <div className="submitForm">
              <h3 className="submitOk">Datos enviados correctamente ✅ </h3>
              <br />
              <button className="buttonVolver">
                {" "}
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Volver al home
                </Link>
              </button>
            </div>
          </>
        )}
      </section>
      </body>
    </>
  );
}
