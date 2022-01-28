import React from "react";
import logo from "../img/compras.png";

export default function CartWidget() {
  function cancel(evt) {
    if (
      evt.key == "a" ||
      evt.key == "e" ||
      evt.key == "i" ||
      evt.key == "o" ||
      evt.key == "u"
    )
      evt.preventDefault();
  }

  return (
    <>
      <input onKeyDown={cancel}></input>

      <li>
        <a>
          <img src={logo} width={"20px"}></img>
        </a>
      </li>
    </>
  );
}
