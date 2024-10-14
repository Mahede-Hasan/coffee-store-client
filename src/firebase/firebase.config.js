// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmwRL2wNukBOkt_CIGQbeUsfCDjOyfJQU",
  authDomain: "coffee-store-25784.firebaseapp.com",
  projectId: "coffee-store-25784",
  storageBucket: "coffee-store-25784.appspot.com",
  messagingSenderId: "550008371377",
  appId: "1:550008371377:web:7ff98c25ba40d49c2d4a90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;