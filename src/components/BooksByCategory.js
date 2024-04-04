// BooksByCategory.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import "./BooksByCategory.css";

const BooksByCategory = ({ addToCart }) => {
  const { categoria } = useParams();
  const [books, setBooks] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState('');

  useEffect(() => {
    const obtenerLibrosPorCategoria = async () => {
      const booksRef = collection(db, 'books');
      const q = query(booksRef, where('category', '==', categoria));
      const data = await getDocs(q);
      setBooks(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setCategoriaActual(categoria); // Actualizar la categoría actual
    };

    obtenerLibrosPorCategoria();
  }, [categoria]);

  return (
    <div className="books-by-category">
      <h2>Libros de la categoría {categoriaActual}</h2>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <div className="book-details">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
              <p>Description: {book.description}</p>
              <button onClick={() => addToCart(book)}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksByCategory;
