import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/categories/histórico">histórico</Link>
        </li>
        <li>
          <Link to="/categories/terror">terror</Link>
        </li>
        <li>
          <Link to="/categories/fantasia">fantasia</Link>
        </li>
        <li>
          <Link to="/cart">Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;