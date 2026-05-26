import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1LACggoDpI1d2r6xAkq4xHvBf5xVQ4zA",
  authDomain: "portofolio-danial.firebaseapp.com",
  projectId: "portofolio-danial",
  storageBucket: "portofolio-danial.firebasestorage.app",
  messagingSenderId: "722325516092",
  appId: "1:722325516092:web:67e0cd3820fb4df1d1f839",
  measurementId: "G-3KVKLWJRQD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
