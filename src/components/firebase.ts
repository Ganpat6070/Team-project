// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getFirestore } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBBJKj3ijy-Wpkr0btopAC_B2_sWNu2oBA",
  authDomain: "matrimony-react.firebaseapp.com",
  databaseURL: "https://matrimony-react-default-rtdb.firebaseio.com",
  projectId: "matrimony-react",
  storageBucket: "matrimony-react.appspot.com",
  messagingSenderId: "49034311485",
  appId: "1:49034311485:web:d6df992f5a7c663b41f754",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase auth export
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

// const db = getFirestore(app);
// export default db;
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const email = result.user.email;
      console.log(email);
    })
    .catch((error) => {
      console.log(error);
    });
};
