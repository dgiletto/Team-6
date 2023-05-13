// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjLMUoVwwVbXYkdCsTsbzgjhL79-w6f9A",
    authDomain: "auth-dev-ec4f0.firebaseapp.com",
    projectId: "auth-dev-ec4f0",
    storageBucket: "auth-dev-ec4f0.appspot.com",
    messagingSenderId: "847338811487",
    appId: "1:847338811487:web:12b60131d79dba42366bea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
