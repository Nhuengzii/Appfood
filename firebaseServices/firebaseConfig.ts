// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY9LkZUCzFoefbKLMvbsmnblzH2q1OXTQ",
  authDomain: "app-food-60480.firebaseapp.com",
  projectId: "app-food-60480",
  storageBucket: "app-food-60480.appspot.com",
  messagingSenderId: "865205219140",
  appId: "1:865205219140:web:fe3711505ed40cdfe6f111",
  measurementId: "G-ZTTMZ5XFDE"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
export { auth, app, db }
