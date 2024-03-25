import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Estilos CSS para NavBar

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categories/histórico">Histórico</Link></li>
        <li><Link to="/categories/terror">Terror</Link></li>
        <li><Link to="/categories/fantasia">Fantasía</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;