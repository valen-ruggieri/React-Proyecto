import React from "react";
import Item from "./Item";

export default function ItemList({ arrayDeProductos, llegoLaPromesa }) {
  return (
    <>
      {!llegoLaPromesa ? (
        <>
          <section className="itemDetailContainer">
            <h2>Loading....</h2>
          </section>
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
