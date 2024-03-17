import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase'; // Asegúrate de tener la ruta correcta aquí
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = await db.collection('Items').doc(id).get();
        if (itemDoc.exists) {
          setItem(itemDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching item: ', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // Aquí puedes implementar la lógica para agregar el item al carrito
    console.log(`Agregando ${quantity} unidades de ${item.nombre} al carrito.`);
  };

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.nombre}</h2>
          <p>Categoría: {item.categoria}</p>
          <p>Precio: ${item.precio}</p>
          <Description description={item.sinopsis} />
          <ItemQuantitySelector onChange={handleQuantityChange} />
          <AddItemButton onClick={handleAddToCart} />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;