// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD6wmBMnbESh6P-ty2WvmZwe6qph06rhk",
  authDomain: "movie-link-app.firebaseapp.com",
  projectId: "movie-link-app",
  storageBucket: "movie-link-app.appspot.com",
  messagingSenderId: "331349457801",
  appId: "1:331349457801:web:4ac15f47b973249c0fbf58",
  measurementId: "G-NP072HRS8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
// the auth variable contain the information about the user;

export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);