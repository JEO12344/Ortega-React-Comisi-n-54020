import React from 'react';

const CartWidget = ({ quantity }) => {
  return (
    <div>
      <i className="fas fa-shopping-cart"></i>
      <span>{quantity}</span>
    </div>
  );
};

export default CartWidget;