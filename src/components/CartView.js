import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

const CartView = ({ carrito, clearCart }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [orderFeedback, setOrderFeedback] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePurchase = async (e) => {
    e.preventDefault();

    if (formData.firstName && formData.lastName && formData.email && formData.phone) {
      try {
        const orderData = {
          products: carrito,
          date: Timestamp.now(),
          customer: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone
          }
        };

        const docRef = await addDoc(collection(db, 'orders'), orderData);
        setOrderFeedback(`Orden guardada con éxito. Número de orden: ${docRef.id}`);

        clearCart();
      } catch (error) {
        console.error('Error al guardar la orden:', error);
        setOrderFeedback('Ocurrió un error al guardar la orden. Por favor inténtalo nuevamente.');
      }
    } else {
      setOrderFeedback('Por favor complete todos los campos requeridos');
    }
  };

  const totalPrice = carrito.reduce((total, book) => total + book.price, 0);

  return (
    <div className="cart-view">
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((book, index) => (
          <li key={index}>
            <span>{book.title} - ${book.price}</span>
          </li>
        ))}
      </ul>
      {carrito.length > 0 ? (
        <div>
          <p>Total: ${totalPrice}</p>
          <form onSubmit={handlePurchase}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Nombre" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Apellido" required />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Correo electrónico" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Teléfono" required />
            <button type="submit" disabled={carrito.length === 0}>Realizar compra</button>
          </form>
          <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
      ) : (
        <p>El carrito está vacío</p>
      )}
      {orderFeedback && <p>{orderFeedback}</p>}
    </div>
  );
};

export default CartView;
