import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAd3KZ66PnsaxND0hFbrPrClErl04d2irE",
  authDomain: "szema-ac882.firebaseapp.com",
  databaseURL: "https://szema-ac882.firebaseio.com",
  projectId: "szema-ac882",
  storageBucket: "szema-ac882.appspot.com",
  messagingSenderId: "656907898468",
  appId: "1:656907898468:web:110b5ca6f17f5d63091971",
  measurementId: "G-7FDCFR048G"
});
export const db = firebase.firestore()
export default app;

