import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import "./ItemDetail.css";


function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        const docRef = doc(db, 'books', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    getItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>Author: {item.author}</p>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <p>Description: {item.description}</p>
    </div>
  );
}

export default ItemDetail;
