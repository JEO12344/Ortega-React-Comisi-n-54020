import React from 'react';

const AddItemButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Agregar al Carrito
    </button>
  );
};

export default AddItemButton;