import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase'; // Asegúrate de tener la ruta correcta aquí
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = db.collection('Items');
        let query = itemsCollection;

        if (category) {
          query = itemsCollection.where('categoria', '==', category);
        }

        const snapshot = await query.get();
        const itemsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching items: ', error);
      }
    };

    fetchItems();
  }, [category]);

  return (
    <div>
      <h2>Productos disponibles</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;