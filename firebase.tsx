// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBJKj3ijy-Wpkr0btopAC_B2_sWNu2oBA",
  authDomain: "matrimony-react.firebaseapp.com",
  projectId: "matrimony-react",
  storageBucket: "matrimony-react.appspot.com",
  messagingSenderId: "49034311485",
  appId: "1:49034311485:web:d6df992f5a7c663b41f754",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// const auth = firebase.auth();
// export { auth };
export default db;
