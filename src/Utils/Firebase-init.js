import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import{getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDYvJmHsl2kJID24yQL76P_4xtLi3ZHoy0",
    authDomain: "bingewatcher-e6b55.firebaseapp.com",
    projectId: "bingewatcher-e6b55",
    storageBucket: "bingewatcher-e6b55.appspot.com",
    messagingSenderId: "854364648091",
    appId: "1:854364648091:web:442c293411d89929570c3e"
};

const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);

export const db = getFirestore();