import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Categorias from './components/Categorias';
import CartView from './components/CartView';
import ItemDetail from './components/ItemDetail'; // Importamos ItemDetail

const App = () => {
  const categorias = ['Histórico', 'Terror', 'Fantasía'];
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
          <Categorias categorias={categorias} />
        </header>
        <Routes>
          <Route path="/" element={<BookList addToCart={addToCart} />} />
          <Route path="/cart" element={<CartView carrito={carrito} clearCart={clearCart} />} />
          <Route path="/item/:id" element={<ItemDetail />} /> {/* Ruta para ItemDetail */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;