import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBjmvKWX_F9ifidci20vsU4r-ueKBvvnjg",
  authDomain: "setup-3b371.firebaseapp.com",
  projectId: "setup-3b371",
  storageBucket: "setup-3b371.firebasestorage.app",
  messagingSenderId: "951243757402",
  appId: "1:951243757402:web:ea578297368ada21b6c563",
  datadatabaseURL : "https://setup-3b371-default-rtdb.firebaseio.com/",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);