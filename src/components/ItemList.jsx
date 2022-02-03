import React from "react";
import Item from "./Item";
import Loader from "./Loader";

export default function ItemList({ arrayDeProductos, llegoLaPromesa }) {
  return (
    <>
      {!llegoLaPromesa ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <section className="itemListContainer">
            {arrayDeProductos.map((item, key) => {
              return <Item item={item} key={key} />;
            })}
          </section>
        </>
      )}
    </>
  );
}
