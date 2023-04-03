import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzDRcsigI14LhK8PuJeoA5Zp4ea1NVLLk",
  authDomain: "chat-app-76bc7.firebaseapp.com",
  projectId: "chat-app-76bc7",
  storageBucket: "chat-app-76bc7.appspot.com",
  messagingSenderId: "680296087485",
  appId: "1:680296087485:web:6e08abea9dbcab6b2b1cd4",
  measurementId: "G-MFV9NF9H41"

  /*
  apiKey: "AIzaSyAzDRcsigI14LhK8PuJeoA5Zp4ea1NVLLk",
  authDomain: "chat-app-76bc7.firebaseapp.com",
  projectId: "chat-app-76bc7",
  storageBucket: "chat-app-76bc7.appspot.com",
  messagingSenderId: "680296087485",
  appId: "1:680296087485:web:6e08abea9dbcab6b2b1cd4",
  measurementId: "G-MFV9NF9H41"
  */
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
