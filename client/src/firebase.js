// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblogapp-734fb.firebaseapp.com",
  projectId: "mernblogapp-734fb",
  storageBucket: "mernblogapp-734fb.appspot.com",
  messagingSenderId: "961338532597",
  appId: "1:961338532597:web:23db08a44964145b441bbc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
