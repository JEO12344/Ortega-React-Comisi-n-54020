import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import "./BooksByCategory.css"; // Asegúrate de importar el archivo CSS

const BooksByCategory = () => {
  const { categoria } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const obtenerLibrosPorCategoria = async () => {
      const booksRef = collection(db, 'books');
      const q = query(booksRef, where('category', '==', categoria));
      const data = await getDocs(q);
      setBooks(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    obtenerLibrosPorCategoria();
  }, [categoria]);

  return (
    <div className="books-by-category">
      <h2>Libros de la categoría {categoria}</h2>
      <div className="book-list"> {/* Aplica la clase "book-list" para el contenedor de los libros */}
        {books.map((book) => (
          <div key={book.id} className="book-card"> {/* Aplica la clase "book-card" para cada tarjeta de libro */}
            <img src={book.image} alt={book.title} />
            <div className="book-details">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
              <p>Description: {book.description}</p>
              <button>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksByCategory;