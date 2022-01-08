import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRmEa6CLutnmq7Zc-zLzJ7leaIuN32WBI",
  authDomain: "library-top-a7458.firebaseapp.com",
  projectId: "library-top-a7458",
  storageBucket: "library-top-a7458.appspot.com",
  messagingSenderId: "911226944155",
  appId: "1:911226944155:web:628fae2e3bc68f6abf243e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
