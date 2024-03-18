import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0FexkFtxivqc5ycZk9dN7J40OCG_BWE4",
  authDomain: "proyecto-react-a3872.firebaseapp.com",
  projectId: "proyecto-react-a3872",
  storageBucket: "proyecto-react-a3872.appspot.com",
  messagingSenderId: "523953906107",
  appId: "1:523953906107:web:5aaa796a5ebae0a12de49e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addItemToFirestore = async (item) => {
  try {
    const docRef = await addDoc(collection(db, 'items'), item);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id; // Retorna el ID del nuevo documento
  } catch (e) {
    console.error('Error adding document: ', e);
    return null;
  }
};

export { db, addItemToFirestore }; // Exportar db y addItemToFirestore
export default db; // También puedes exportar db como default si lo necesitas