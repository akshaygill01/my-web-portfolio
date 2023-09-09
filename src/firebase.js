// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCi-6m_bcdbFZkZvamxbqeHeV7dUJVmDp0",
  authDomain: "react-portfolio-akshay.firebaseapp.com",
  projectId: "react-portfolio-akshay",
  storageBucket: "react-portfolio-akshay.appspot.com",
  messagingSenderId: "706452565209",
  appId: "1:706452565209:web:32cbe02878ea2187f122c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db= getFirestore();