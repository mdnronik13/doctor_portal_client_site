// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg2iuQ6XyutSbXMV0hDgUR1NM68IfvA2s",
  authDomain: "doctors-portal-45d5a.firebaseapp.com",
  projectId: "doctors-portal-45d5a",
  storageBucket: "doctors-portal-45d5a.appspot.com",
  messagingSenderId: "883585006057",
  appId: "1:883585006057:web:9dc990c16befce4f737378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;