import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {

	const {itemId} = useParams ();

 

    const [producto , setProducto] = useState ([]);

    useEffect (()=>{

        setTimeout (()=>{

            let arrayDeProductos = [
				{nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/Hhqtq0z/remera.jpg",id:"001",detail:"Remera de algodon 100%, corte slim fit, color gris claro"},
        {nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/sqkz9j2/remera.jpg",id:"001",detail:"Remera de algodon 100%, corte slim fit, color negro"},
        {nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/FYPZ36t/remera.jpg",id:"003",detail:"Remera de algodon 100%, corte slim fit, color celeste"},
        {nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/26V036V/remera.jpg",id:"004",detail:"Remera de algodon 100%, corte slim fit, color blanco"},
       

				{nombre: "Buzo Oversize",precio:3000, stock: 30, img: "https://i.ibb.co/p4fVpZZ/Buzo.jpg" ,id:"005",detail:"Buzo de algodon, talla oversize, color lila"},
        {nombre: "Buzo Oversize",precio:3000, stock: 30, img: "https://i.ibb.co/2ns1n9s/buzo.jpg" ,id:"006",detail:"Buzo de algodon, talla oversize, color amarillo"},
        {nombre: "Buzo Oversize",precio:3000, stock: 30, img: "https://i.ibb.co/chHfWFw/buzo.jpg" ,id:"007",detail:"Buzo de algodon, talla oversize, color rosa"},

				{nombre: "Short De Baño",precio:2000,stock: 70,img: "https://i.ibb.co/t28Q7SR/Short.jpg",id:"008",detail:"Short de baño, con elastico, color rojo"},
        {nombre: "Short De Baño",precio:2000,stock: 70,img: "https://i.ibb.co/YbJhfH6/short.jpg",id:"009",detail:"Short de baño, con elastico, color azul"},
        {nombre: "Short De Baño",precio:2000,stock: 70,img: "https://i.ibb.co/QMSDTkZ/short.jpg",id:"010",detail:"Short de baño, con elastico, color rosa"},

				{nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/vBG9nV2/Chomba.jpg",id:"011",detail:"Chomba de pique, calidad premium, color bordo"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/4YpFZGK/chomba.jpg",id:"012",detail:"Chomba de pique, calidad premium, color negro"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/Bn6V8D9/chomba.jpg",id:"013",detail:"Chomba de pique, calidad premium, color verde oscuro"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/9ZDdSNV/chomba.jpg",id:"014",detail:"Chomba de pique, calidad premium, color rojo"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/xGc2b7G/chomba.jpg",id:"015",detail:"Chomba de pique, calidad premium, color azul"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/9q3qfmC/chomba.jpg",id:"016",detail:"Chomba de pique, calidad premium, color azul oscuro"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/StFKvdz/chomba.jpg",id:"017",detail:"Chomba de pique, calidad premium, color blanco"},
      
      ];

				arrayDeProductos = arrayDeProductos.filter(item => item.id == itemId);
				
			let productoIndicado = arrayDeProductos[0];

				setProducto(productoIndicado);


			
	
        

    },2000)

},[itemId])

  return (
    <>
    <ItemDetail producto = {producto}/>
    </>
  )
}
