import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgVlPcWYXdcqrUVKAkWqbpM2jglvmrUZg",
  authDomain: "fir-next-5c580.firebaseapp.com",
  projectId: "fir-next-5c580",
  storageBucket: "fir-next-5c580.appspot.com",
  messagingSenderId: "1093488055813",
  appId: "1:1093488055813:web:fdeb4d4ed7436ea1e96e6c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;