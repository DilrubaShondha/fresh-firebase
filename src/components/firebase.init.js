// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi34fRfCmyA-LgoyA9IRYG6SCogBQ-i0U",
  authDomain: "fresh-firebase-6eda2.firebaseapp.com",
  projectId: "fresh-firebase-6eda2",
  storageBucket: "fresh-firebase-6eda2.firebasestorage.app",
  messagingSenderId: "303026753619",
  appId: "1:303026753619:web:214d0af65fb26c1704f6a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;