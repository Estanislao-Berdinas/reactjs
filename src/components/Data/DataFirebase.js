import {  getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK7aai8RN1cnC5gOIa-elsNEWg5kqANwU",
  authDomain: "raison-tandil.firebaseapp.com",
  projectId: "raison-tandil",
  storageBucket: "raison-tandil.appspot.com",
  messagingSenderId: "354197734882",
  appId: "1:354197734882:web:f008b9b07211c0b51be5bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);

