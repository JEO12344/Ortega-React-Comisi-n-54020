import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Categorias from './components/Categorias';
import CartView from './components/CartView';
import ItemDetail from './components/ItemDetail';
import BooksByCategory from './components/BooksByCategory';
const App = () => {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (book) => {
    setCarrito([...carrito, book]);
  };

  const clearCart = () => {
    setCarrito([]);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Librería Minerva</h1>
          <Categorias />
        </header>
        <Routes>
          <Route path="/" element={<BookList addToCart={addToCart} />} />
          <Route path="/categorias/:categoria" element={<BooksByCategory />} /> {/* Ruta para mostrar libros por categoría */}
          <Route path="/cart" element={<CartView carrito={carrito} clearCart={clearCart} />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;