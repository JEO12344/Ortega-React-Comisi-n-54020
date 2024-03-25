import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPuwzd_9ffHU62QF4PrJMY6IOBSlItsLo",
  authDomain: "proyecto-ortega.firebaseapp.com",
  projectId: "proyecto-ortega",
  storageBucket: "proyecto-ortega.appspot.com",
  messagingSenderId: "381451190478",
  appId: "1:381451190478:web:a279212aca63e4aa09909f"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la referencia a la base de datos Firestore
const db = getFirestore(app);

// Función para obtener libros por categoría
export const getBooksByCategory = async (category) => {
  const booksCollection = collection(db, 'books');
  const q = query(booksCollection, where('category', '==', category));
  const querySnapshot = await getDocs(q);

  const books = [];
  querySnapshot.forEach((doc) => {
    books.push({ id: doc.id, ...doc.data() });
  });

  return books;
};
