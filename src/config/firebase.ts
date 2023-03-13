// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdZgdHPDevG2dXlf3Q44dft0BXc2s6FS4",
  authDomain: "react-name-b4aa8.firebaseapp.com",
  projectId: "react-name-b4aa8",
  storageBucket: "react-name-b4aa8.appspot.com",
  messagingSenderId: "919322886792",
  appId: "1:919322886792:web:895604d54591638f58553d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)