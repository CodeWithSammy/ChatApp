// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG925nb0R4zXB8brteVbxglHGg0aJULy4",
  authDomain: "letstalk-bd5d2.firebaseapp.com",
  projectId: "letstalk-bd5d2",
  storageBucket: "letstalk-bd5d2.appspot.com",
  messagingSenderId: "741567959206",
  appId: "1:741567959206:web:1b898f1959e7efbbd06467"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);