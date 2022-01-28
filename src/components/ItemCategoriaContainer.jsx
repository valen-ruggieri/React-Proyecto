import React, {useEffect, useState} from 'react';
import ItemCategoria from './ItemCategoria';
import { useParams } from 'react-router-dom';

export default function ItemCategoriaContainer() {


	const {categoriaId} = useParams ();

 

    const [categoriaLista , setCategoriaLista] = useState ([]);

    useEffect (()=>{


        setTimeout (()=>{

            let productos = [

                {nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/Hhqtq0z/remera.jpg",id:"001", catg:"Remeras"},
                {nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/sqkz9j2/remera.jpg",id:"002",catg:"Remeras"},
                {nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/FYPZ36t/remera.jpg",id:"003",catg:"Remeras"},
                {nombre: "Remera Basic",precio:1500,stock: 60,img: "https://i.ibb.co/26V036V/remera.jpg",id:"004",catg:"Remeras"},
               
                {nombre: "Buzo Oversize",precio:3000, stock: 30, img: "https://i.ibb.co/p4fVpZZ/Buzo.jpg" ,id:"005",catg:"Buzos"},
                {nombre: "Buzo Oversize",precio:3000, stock: 30, img: "https://i.ibb.co/2ns1n9s/buzo.jpg" ,id:"006",catg:"Buzos"},
                {nombre: "Buzo Oversize",precio:3000, stock: 30, img: "https://i.ibb.co/chHfWFw/buzo.jpg" ,id:"007",catg:"Buzos"},
                {nombre: "Buzo Oversize",precio:3000, stock: 30, img: "https://i.ibb.co/Cs1z4K4/buzo.jpg" ,id:"008",catg:"Buzos"},
        
                {nombre: "Short De Baño",precio:2000,stock: 70,img: "https://i.ibb.co/t28Q7SR/Short.jpg",id:"008",catg:"Shorts"},
                {nombre: "Short De Baño",precio:2000,stock: 70,img: "https://i.ibb.co/YbJhfH6/short.jpg",id:"009",catg:"Shorts"},
                {nombre: "Short De Baño",precio:2000,stock: 70,img: "https://i.ibb.co/QMSDTkZ/short.jpg",id:"010",catg:"Shorts"},
                {nombre: "Short De Baño",precio:2000,stock: 70,img: "https://i.ibb.co/4fdHvLw/short.jpg",id:"011",catg:"Shorts"},
        
                {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/9ZDdSNV/chomba.jpg",id:"013",catg:"Chombas"},
                {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/xGc2b7G/chomba.jpg",id:"014",catg:"Chombas"},
                {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/9q3qfmC/chomba.jpg",id:"015",catg:"Chombas"},
                {nombre: "Chomba De Pique",precio:2500,stock: 40,img: "https://i.ibb.co/StFKvdz/chomba.jpg",id:"016",catg:"Chombas"},
      
      ];

				productos = productos.filter((item) => item.catg === categoriaId);

				setCategoriaLista(productos);

            
        

    },2000)

},[categoriaId])


  return (

      <>
      
      {(categoriaLista)?



<section className="itemListCategoria">
        {categoriaLista.map((categoriaLista, key)=>{
            return <ItemCategoria categoriaLista = {categoriaLista} key={key}/>
        })}
</section>

     :
<>
        <section className='itemDetailContainer'>
        <h2>Loading....</h2>
        </section>
</>
    }


      </>
  );
}
