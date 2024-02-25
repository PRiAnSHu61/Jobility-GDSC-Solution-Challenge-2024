// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0PyyaE0SkQUxWkUHHcCCtGBqk_B3GoZ4",
  authDomain: "jobility-1a4eb.firebaseapp.com",
  projectId: "jobility-1a4eb",
  storageBucket: "jobility-1a4eb.appspot.com",
  messagingSenderId: "233271515298",
  appId: "1:233271515298:web:391958173ed18741f3dffb",
  measurementId: "G-NQP63ELS8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export {auth, app};