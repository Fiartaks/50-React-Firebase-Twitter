// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ05rbkjIXe7Ma5Ob4nmdTd_Yc_N4wz4g",
  authDomain: "twitter-89350.firebaseapp.com",
  projectId: "twitter-89350",
  storageBucket: "twitter-89350.firebasestorage.app",
  messagingSenderId: "98750131745",
  appId: "1:98750131745:web:2a6754d6bc0978fdef7d60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth yapisnijn referansini almnak

export const auth = getAuth(app);

//google saglayicinhin referansini almnak

export const provider = new GoogleAuthProvider();

//veritabani referansini almnak

export const db = getFirestore(app);
