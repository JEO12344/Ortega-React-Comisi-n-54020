import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import "./BookList.css";

function BookList({ addToCart }) {
  const booksRef = collection(db, 'books');
  const [books, setBooks] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const getBooks = async () => {
      let queryBooks = booksRef;

      if (categoria) {
        const q = query(booksRef, where('category', '==', categoria));
        queryBooks = q;
      }

      const data = await getDocs(queryBooks);
      setBooks(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    getBooks();
  }, [categoria]);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} />
          <div className="book-details">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Price: ${book.price}</p>
            <Link to={`/item/${book.id}`} className="more-info-link">Más Info</Link>
            <button onClick={() => addToCart(book)}>Agregar al Carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
