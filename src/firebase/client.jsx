// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCzGSnYtGQ920Bzb-R16jqQKmtshkVM0M",
  authDomain: "shop-drinks-a5849.firebaseapp.com",
  projectId: "shop-drinks-a5849",
  storageBucket: "shop-drinks-a5849.appspot.com",
  messagingSenderId: "474921205440",
  appId: "1:474921205440:web:8acbdf13808f549d95f725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app); 