// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE53Ou2XUISFfWsI6dWm4D25Z-Zao8-GQ",
  authDomain: "gallery-18509.firebaseapp.com",
  projectId: "gallery-18509",
  storageBucket: "gallery-18509.appspot.com",
  messagingSenderId: "431277473069",
  appId: "1:431277473069:web:05d93392e8b0db92c367a4",
  measurementId: "G-VQY8CG7JP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);