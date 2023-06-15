import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAxfXqpaFijpdxrRrPbGderncOQ8zfiapQ",
  authDomain: "travel-48b2b.firebaseapp.com",
  projectId: "travel-48b2b",
  storageBucket: "travel-48b2b.appspot.com",
  messagingSenderId: "460109017836",
  appId: "1:460109017836:web:1ed4d3610c3852260d6bc9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db  = getFirestore (app);
export const storage = getStorage(app);
export default app

