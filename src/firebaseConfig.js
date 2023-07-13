import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDphJSoYR8w54ksWVxgPhZfejZmrVsmy8A",
  authDomain: "matiassanchez43240.firebaseapp.com",
  projectId: "matiassanchez43240",
  storageBucket: "matiassanchez43240.appspot.com",
  messagingSenderId: "833945915507",
  appId: "1:833945915507:web:edf3661a5f936e8f4c5a06"
};
  
  

  const app = initializeApp(firebaseConfig);
  
 export const database = getFirestore(app);

const auth = getAuth(app);

export const login = async ({ email, password }) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

export const register = async ({ email, password }) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
};