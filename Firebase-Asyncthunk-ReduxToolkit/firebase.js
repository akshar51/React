import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh5GZ_SxvmZJN2Yc75ojqKhaTE0VT7A7c",
  authDomain: "reudx-c4d48.firebaseapp.com",
  projectId: "reudx-c4d48",
  storageBucket: "reudx-c4d48.firebasestorage.app",
  messagingSenderId: "595375322184",
  appId: "1:595375322184:web:baeec454acc3d1e300947d",
  databaseURL : "https://reudx-c4d48-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);