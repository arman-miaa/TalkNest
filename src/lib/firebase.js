// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "talknest-fd48f.firebaseapp.com",
  projectId: "talknest-fd48f",
  storageBucket: "talknest-fd48f.firebasestorage.app",
  messagingSenderId: "297230523125",
  appId: "1:297230523125:web:0a1b2844ba966a212743bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore()
