import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar (){

     return (  


        <>
<nav className="navBar">


<h1 className="tituloPrinc"> Tienda De Ropa Basic </h1>


<ul className="menu">  
    
    <li><Link to={'/listContainer'} >Home</Link></li>
    <li><a >Novedades</a></li>
    <li><a className="articulos">Articulos</a>
        {/* <ul className="subMenu">
            
            <li><Link to={""}> Remeras</Link></li>
            <li><Link to={""}> Buzos </Link></li>
            <li><Link to={""}> Shorts </Link></li>
            <li><Link to={""}> Chombas </Link></li>
            
        </ul>    */}
    </li>
    <li><a>INGRESAR</a></li>
    
    <CartWidget/>

</ul>



</nav>
        
        
        </>
     )



}