import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          nombre={item.nombre}
          categoria={item.categoria}
          precio={item.precio}
          stock={item.stock}
          photoLink={item.photoLink}
        />
      ))}
    </div>
  );
};

export default ItemList;