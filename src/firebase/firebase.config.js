// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxyxq-85w0h0cU3THxlxgdRXoyKwTHtX8",
    authDomain: "world-tourist-website.firebaseapp.com",
    projectId: "world-tourist-website",
    storageBucket: "world-tourist-website.appspot.com",
    messagingSenderId: "1056249286758",
    appId: "1:1056249286758:web:3125173ab0130e39ce9da7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;