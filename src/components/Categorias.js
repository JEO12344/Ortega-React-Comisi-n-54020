import React from 'react';
import { Link } from 'react-router-dom';
import "./Categorias.css";


const Categorias = ({ categorias }) => {
  return (
    <div className="categorias">
      <h2>Categorías</h2>
      <ul>
        <li>
          <Link to="/" className="categoria-link">
            Inicio
          </Link>
        </li>
        {categorias.map((categoria, index) => (
          <li key={index}>
            <Link to={`/categorias/${categoria}`} className="categoria-link">
              {categoria}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/cart" className="categoria-link">
            Carrito
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categorias;