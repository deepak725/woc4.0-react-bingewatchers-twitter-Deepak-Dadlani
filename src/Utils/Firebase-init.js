import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import{getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAjhkbVP8i086eX-ABRUSi-0YoOS-9yq2Y",
    authDomain: "bingewatcher-1df92.firebaseapp.com",
    projectId: "bingewatcher-1df92",
    storageBucket: "bingewatcher-1df92.appspot.com",
    messagingSenderId: "1050958792525",
    appId: "1:1050958792525:web:d90b4868ac90c70842d904" 
};

const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);

export const db = getFirestore();