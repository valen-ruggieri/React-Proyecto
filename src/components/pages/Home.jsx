import React from "react";
import ItemListContainer from "../ItemListContainer";

export default function Home() {
  return (
    <>
      <section className="bodyHome">
        <h2>Remeras</h2>
        <ItemListContainer categoriaId={"1"} />
        <h2>Buzos</h2>
        <ItemListContainer categoriaId={"2"} />
        <h2>Shorts de baño</h2>
        <ItemListContainer categoriaId={"3"} />
        <h2>Chombas de pique</h2>
        <ItemListContainer categoriaId={"4"} />
      </section>
    </>
  );
}
