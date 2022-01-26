import React from 'react';
import Item from './Item';

export default function ItemList({arrayDeProductos, llegoLaPromesa}) {

  return ( <>
    {console.log(llegoLaPromesa)}
    {!llegoLaPromesa ? <p>Loading...</p> : arrayDeProductos.map((item) => {
          return <Item item={item} />;
        }
    ) }
  </>);
}
