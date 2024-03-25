import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.Nombre}</h2>
      <p>Categoría: {item.categoria}</p>
      <p>Precio: ${item.precio}</p>
      <p>Stock: {item.stock}</p>
      <p>Descripción: {item.descripcion}</p>
      {/* Otros detalles del item */}
      {item.photoLink && (
        <img src={process.env.PUBLIC_URL + '/images/' + item.photoLink} alt={item.nombre} />
      )}
    </div>
  );
};

export default ItemDetail;