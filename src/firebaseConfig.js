// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR0W1CYRfvZyuyCBle_7XU6eovBwewrho",
  authDomain: "tienda-de-comida-54518.firebaseapp.com",
  projectId: "tienda-de-comida-54518",
  storageBucket: "tienda-de-comida-54518.appspot.com",
  messagingSenderId: "134552866972",
  appId: "1:134552866972:web:e5df37e947567caea21d59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
