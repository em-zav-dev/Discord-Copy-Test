// Import the functions you need from the SDKs you need
// import firebase from "firebase";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";


import { getFirestore } from 'firebase/firestore';

 import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArNFzeJpGCyGDdOq3TbXLic0GhIjldqLA",
  authDomain: "my-discord-cc396.firebaseapp.com",
  projectId: "my-discord-cc396",
  storageBucket: "my-discord-cc396.appspot.com",
  messagingSenderId: "1062749194945",
  appId: "1:1062749194945:web:6b3c98d1557b62ce0ba240",
  measurementId: "G-ENYQ6N17CB"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);