// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-46b71.firebaseapp.com",
  projectId: "mern-estate-46b71",
  storageBucket: "mern-estate-46b71.appspot.com",
  messagingSenderId: "735928215282",
  appId: "1:735928215282:web:081b27a9908709483d126b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);