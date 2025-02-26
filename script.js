// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0tvJx9mbhGho0S0KpaQ4t_keuvYYCW3c",
  authDomain: "parallel-cafe.firebaseapp.com",
  projectId: "parallel-cafe",
  storageBucket: "parallel-cafe.firebasestorage.app",
  messagingSenderId: "842470331919",
  appId: "1:842470331919:web:2b293bf7efaf7f4454757a",
  measurementId: "G-R117FBC84G"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);