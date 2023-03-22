// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7BywTk9RajEhiBhw6OLpL4_gAlXicX40",
  authDomain: "perfect-match-3875b.firebaseapp.com",
  projectId: "perfect-match-3875b",
  storageBucket: "perfect-match-3875b.appspot.com",
  messagingSenderId: "1046885201409",
  appId: "1:1046885201409:web:7e73935e0e2a5944ee7200"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export default db
