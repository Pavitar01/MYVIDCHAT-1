// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEix3_nbsqKL1ChEtvzX6DXeIPQqRlMQE",
  authDomain: "vidchat-a0800.firebaseapp.com",
  projectId: "vidchat-a0800",
  storageBucket: "vidchat-a0800.appspot.com",
  messagingSenderId: "488248524951",
  appId: "1:488248524951:web:cd1535e3ed5985714ba9d2",
  measurementId: "G-N9T9TBHM3D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
