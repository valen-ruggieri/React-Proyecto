import React, {useEffect, useState}from "react";
import ItemList from "./ItemList";

export default function  ItemListContainer (){
  const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const productosEnStock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
				{nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/Hhqtq0z/remera.jpg",id:"001"},
        {nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/sqkz9j2/remera.jpg",id:"002"},
        {nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/FYPZ36t/remera.jpg",id:"003"},
        {nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/26V036V/remera.jpg",id:"004"},
       

				{nombre: "Buzo Oversize",precio:3000, stock: 30, img: "https://i.ibb.co/p4fVpZZ/Buzo.jpg" ,id:"005"},
        {nombre: "Buzo Oversize",precio:3000, stock: 30, img: "https://i.ibb.co/2ns1n9s/buzo.jpg" ,id:"006"},
        {nombre: "Buzo Oversize",precio:3000, stock: 30, img: "https://i.ibb.co/chHfWFw/buzo.jpg" ,id:"007"},

				{nombre: "Short De Baño",precio:2000,stock: 70,img: "https://i.ibb.co/t28Q7SR/Short.jpg",id:"008"},
        {nombre: "Short De Baño",precio:2000,stock: 70,img: "https://i.ibb.co/YbJhfH6/short.jpg",id:"009"},
        {nombre: "Short De Baño",precio:2000,stock: 70,img: "https://i.ibb.co/QMSDTkZ/short.jpg",id:"010"},

				{nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/vBG9nV2/Chomba.jpg",id:"011"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/4YpFZGK/chomba.jpg",id:"012"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/Bn6V8D9/chomba.jpg",id:"013"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/9ZDdSNV/chomba.jpg",id:"014"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/xGc2b7G/chomba.jpg",id:"015"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/9q3qfmC/chomba.jpg",id:"016"},
        {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/StFKvdz/chomba.jpg",id:"017"},
      
      ]);
    }, 2000);
  });

  useEffect(() => {
    productosEnStock
      .then((res) => {
        setLlegoLaPromesa(true);
        setArrayDeProductos(res);
      })

      .catch((err) => {
        console.log(err);
      });
  });


  return (
     
    <>
    <section className="itemListContainer">
    <ItemList llegoLaPromesa = {llegoLaPromesa} arrayDeProductos = {arrayDeProductos} />
    </section>
    </>
  );
};

