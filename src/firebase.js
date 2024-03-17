import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
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