// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //Required for firebase authentication
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLJC9XscrAJ0ftHFs4kURNYl3lQYnsDcU",
  authDomain: "react-native-57b24.firebaseapp.com",
  projectId: "react-native-57b24",
  storageBucket: "react-native-57b24.appspot.com",
  messagingSenderId: "814866881903",
  appId: "1:814866881903:web:90bf5abb4046a3d1751c9a"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig); //Firebase should be initialized before 
export const FIREBASE_AUTH = getAuth(FIREBASE_APP); //Required for firebase authentication
export const FIRESTORE_DB = getFirestore(FIREBASE_APP); //Required for firebase authentication
