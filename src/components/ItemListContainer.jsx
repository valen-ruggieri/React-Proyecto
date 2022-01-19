import React from "react";
import ItemCount from "../components/ItemCount";

export default function  ItemListContainer (){

  return (
     
    <div className="main">

      <h2>{}</h2>

      <div className="itemListContainer">

        <ItemCount stock={5} initial={1} />


      </div>


    </div>
  );
};

