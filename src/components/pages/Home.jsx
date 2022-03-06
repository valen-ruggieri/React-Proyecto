import React from "react";
import ItemListContainer from "../itemListContainer/ItemListContainer";
import "./pages.css";
export default function Home() {
  return (
    <>
      <section className="bodyHome">
        <ItemListContainer categoriaId={"1"} categoryName={"REMERAS"} />
        <ItemListContainer categoriaId={"2"} categoryName={"BUZOS"} />
        <ItemListContainer categoriaId={"3"} categoryName={"SHORTS DE BAÑO"}/>
        <ItemListContainer categoriaId={"4"} categoryName={"CHOMBAS DE PIQUE"} />
      </section>
    </>
  );
}
