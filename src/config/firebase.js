import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDPuwzd_9ffHU62QF4PrJMY6IOBSlItsLo",
    authDomain: "proyecto-ortega.firebaseapp.com",
    projectId: "proyecto-ortega",
    storageBucket: "proyecto-ortega.appspot.com",
    messagingSenderId: "381451190478",
    appId: "1:381451190478:web:a279212aca63e4aa09909f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
