import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDFThrVnuWZ7shD18kfWUcOHEt-_EdskH4",
  authDomain: "medicohub-1580d.firebaseapp.com",
  projectId: "medicohub-1580d",
  storageBucket: "medicohub-1580d.firebasestorage.app",
  messagingSenderId: "97654248686",
  appId: "1:97654248686:web:c16a8519f78aa950494fff",
  measurementId: "G-F9RSPV0SDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);