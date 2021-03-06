import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";



const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
});



export const auth = firebaseConfig.auth();
export default firebase;
// databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,