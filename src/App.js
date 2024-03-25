import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart'; // Importa el componente Cart


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categories/histórico" element={<ItemListContainer />} /> {/* Ruta para Histórico */}
          <Route path="/categories/terror" element={<ItemListContainer />} /> {/* Ruta para Terror */}
          <Route path="/categories/fantasia" element={<ItemListContainer />} /> {/* Ruta para Fantasía */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;