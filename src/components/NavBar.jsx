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
            <Link to={"/itemCategoria/1"}> Remeras</Link>
          </li>
          <li>
            <Link to={"/itemCategoria/2"}> Buzos </Link>
          </li>
          <li>
            <Link to={"/itemCategoria/3"}> Shorts </Link>
          </li>
          <li>
            <Link to={"/itemCategoria/4"}> Chombas </Link>
          </li>

          <li>INGRESAR</li>

          <li>
            <Link to={"/cart"}> <CartWidget /></Link>
          </li>

          
        </ul>
      </nav>
    </>
  );
}
