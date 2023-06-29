// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAovgYgntjUz7KVbkXztowpR5rrCWdYOZM",
  authDomain: "vidchat-78734.firebaseapp.com",
  projectId: "vidchat-78734",
  storageBucket: "vidchat-78734.appspot.com",
  messagingSenderId: "544934406478",
  appId: "1:544934406478:web:897d395593e5a921e6961f",
  measurementId: "G-TQXYH5JMXS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
