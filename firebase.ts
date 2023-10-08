// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk3qYkI5oF4X9t_XuezFbtudSF6E_pvsE",
  authDomain: "opensc-baee6.firebaseapp.com",
  projectId: "opensc-baee6",
  storageBucket: "opensc-baee6.appspot.com",
  messagingSenderId: "629425077762",
  appId: "1:629425077762:web:3fa8b29f80c0c698d3f11b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const storage = getStorage(app)

export {db, app, storage}