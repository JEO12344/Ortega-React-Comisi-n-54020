import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import './ItemListContainer.css'; // Estilos CSS para ItemListContainer

function ItemListContainer() {
  const [books, setBooks] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchBooksByCategory = async () => {
      if (!category) return; // Salir si category no está definido
      const db = getFirestore();
      const booksCollection = collection(db, 'books');
      const q = query(booksCollection, where('category', '==', category));
      const querySnapshot = await getDocs(q);

      const booksData = [];
      querySnapshot.forEach((doc) => {
        booksData.push({ id: doc.id, ...doc.data() });
      });

      setBooks(booksData);
    };

    fetchBooksByCategory();
  }, [category]);

  return (
    <div className="item-list-container">
      <h2>Libros de {category}</h2>
      <div className="books-list">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Autor: {book.author}</p>
            <p>Descripción: {book.description}</p>
            <p>Precio: ${book.price}</p>
            <p>Categoría: {book.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
