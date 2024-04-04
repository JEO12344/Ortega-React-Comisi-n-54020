import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import "./Categorias.css";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const obtenerCategorias = async () => {
      const categoriasSnapshot = await getDocs(collection(db, 'books'));
      const categoriasUnicas = new Set();
      categoriasSnapshot.forEach((doc) => {
        categoriasUnicas.add(doc.data().category);
      });
      setCategorias(Array.from(categoriasUnicas));
    };

    obtenerCategorias();
  }, []);

  return (
    <div className="categorias">
      <h2>Categorías</h2>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'categoria-link-active' : 'categoria-link'}>
            Todos
          </Link>
        </li>
        {categorias.map((categoria, index) => (
          <li key={index}>
            <Link
              to={`/categorias/${categoria}`}
              className={location.pathname === `/categorias/${categoria}` ? 'categoria-link-active' : 'categoria-link'}
            >
              {categoria}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/cart" className={location.pathname === '/cart' ? 'categoria-link-active' : 'categoria-link'}>
            Carrito
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categorias;