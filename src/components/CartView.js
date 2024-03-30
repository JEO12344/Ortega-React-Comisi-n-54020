import React from 'react';
import "./CartView.css";


const CartView = ({ carrito, clearCart }) => {
  return (
    <div className="cart-view">
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((book, index) => (
          <li key={index}>
            <span>{book.title} - ${book.price}</span>
          </li>
        ))}
      </ul>
      {carrito.length > 0 ? (
        <button onClick={clearCart}>Limpiar Carrito</button>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default CartView;
