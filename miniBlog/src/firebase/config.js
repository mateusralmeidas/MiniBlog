// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ANJFpQz2ICGc4CsQveCwMu4uBSu27jE",
  authDomain: "miniblog-c5690.firebaseapp.com",
  projectId: "miniblog-c5690",
  storageBucket: "miniblog-c5690.firebasestorage.app",
  messagingSenderId: "361847311078",
  appId: "1:361847311078:web:4d5ddeeccf0b4ceb39c927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};