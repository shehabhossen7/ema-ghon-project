// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYMoSf9wEAQBGkXH387FS_-pVWxAvsv-k",
  authDomain: "ema-jhon-simple-45ba8.firebaseapp.com",
  projectId: "ema-jhon-simple-45ba8",
  storageBucket: "ema-jhon-simple-45ba8.appspot.com",
  messagingSenderId: "142750366535",
  appId: "1:142750366535:web:30521e4a1bff7dcb9d6a62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
