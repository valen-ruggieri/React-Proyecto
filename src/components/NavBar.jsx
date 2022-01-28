import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navBar">
        <h1 className="tituloPrinc">TIENDA DE ROPA BASIC</h1>

        <ul className="menu">
          <li>
            <Link to={"/listContainer"}>Home</Link>
          </li>
          <li>Novedades</li>

          <li>
            <Link to={"/itemCategoria/Remeras"}> Remeras</Link>
          </li>
          <li>
            <Link to={"/itemCategoria/Buzos"}> Buzos </Link>
          </li>
          <li>
            <Link to={"/itemCategoria/Shorts"}> Shorts </Link>
          </li>
          <li>
            <Link to={"/itemCategoria/Chombas"}> Chombas </Link>
          </li>

          <li>INGRESAR</li>

          <CartWidget />
        </ul>
      </nav>
    </>
  );
}
