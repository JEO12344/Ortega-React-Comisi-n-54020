import React, { useState, useEffect } from 'react';
import './Cart.css'; // Estilos CSS para Cart
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      // Simulación de libros en el carrito (cambiar según la lógica de tu aplicación)
      const booksInCart = ['book_id_1', 'book_id_2', 'book_id_3'];

      // Función para obtener los detalles de los libros en el carrito
      const getBookById = async (id) => {
        const db = getFirestore();
        const bookRef = collection(db, 'books');
        const q = query(bookRef, where('__name__', '==', id));
        const querySnapshot = await getDocs(q);
        const bookData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return bookData[0]; // Se espera que solo haya un documento con el ID dado
      };

      const books = await Promise.all(booksInCart.map(id => getBookById(id)));
      setCartItems(books);
    };

    fetchCartItems();
  }, []);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Autor: {item.author}</p>
              <p>Descripción: {item.description}</p>
              <p>Precio: ${item.price}</p>
            </div>
            <button className="remove-button">Eliminar</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
        <button className="checkout-button">Pagar</button>
      </div>
    </div>
  );
}

export default Cart;