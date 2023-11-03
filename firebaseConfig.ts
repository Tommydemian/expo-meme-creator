import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBHGLlrIc4fDCo-eBWU9Y-wAOVHvjz8YEA",
  authDomain: "mobileproject-f1865.firebaseapp.com",
  projectId: "mobileproject-f1865",
  storageBucket: "mobileproject-f1865.appspot.com",
  messagingSenderId: "1030446827477",
  appId: "1:1030446827477:web:bba2afb8c87a98eace5f5c",
  measurementId: "G-8632LWH65G",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
