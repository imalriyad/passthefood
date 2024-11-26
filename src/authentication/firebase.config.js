// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDboIeo29hZzcHU2STJmMK863qPHluPxKs",
  authDomain: "passthefood-336e2.firebaseapp.com",
  projectId: "passthefood-336e2",
  storageBucket: "passthefood-336e2.firebasestorage.app",
  messagingSenderId: "91225999306",
  appId: "1:91225999306:web:fef2f5e385c5161361b133",
  measurementId: "G-K216477M4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


