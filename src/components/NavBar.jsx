import React from "react";

export default function NavBar (){

     return (  


        <>
<nav class="navBar">


<h1 class="tituloPrinc"> Tienda De Ropa Basic </h1>


<ul class="menu">  
    
    <li><a >Home</a></li>
    <li><a >Novedades</a></li>
    <li><a class="articulos">Articulos</a>
        <ul class="subMenu">
            
            <li><a > Remeras</a></li>
            <li><a > Shorts </a></li>
            <li><a > Buzos </a></li>
            <li><a > Chombas </a></li>
            
        </ul>   
    </li>
    <li><a>INGRESAR</a></li>

</ul>



</nav>
        
        
        </>
     )



}