import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  const { id, nombre, categoria, precio, stock, photoLink } = item;

  return (
    <div>
      <h3>{nombre}</h3>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${precio}</p>
      <p>Stock: {stock}</p>
      <img src={photoLink} alt={nombre} style={{ width: '200px', height: 'auto' }} />
      <Link to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  );
};

export default Item;