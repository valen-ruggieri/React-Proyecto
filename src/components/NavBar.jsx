import React from "react";
import CartWidget from "./CartWidget";

export default function NavBar (){

     return (  


        <>
<nav className="navBar">


<h1 className="tituloPrinc"> Tienda De Ropa Basic </h1>


<ul className="menu">  
    
    <li><a >Home</a></li>
    <li><a >Novedades</a></li>
    <li><a className="articulos">Articulos</a>
        <ul className="subMenu">
            
            <li><a > Remeras</a></li>
            <li><a > Shorts </a></li>
            <li><a > Buzos </a></li>
            <li><a > Chombas </a></li>
            
        </ul>   
    </li>
    <li><a>INGRESAR</a></li>
    
    <CartWidget/>

</ul>



</nav>
        
        
        </>
     )



}