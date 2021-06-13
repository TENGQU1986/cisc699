import firebase from "firebase";

console.log("into firebase");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN-X1BFNbbDqRwdMgcYsHSOAc5OeNAdNI",
  authDomain: "cisc699-aab32.firebaseapp.com",
  projectId: "cisc699-aab32",
  storageBucket: "cisc699-aab32.appspot.com",
  messagingSenderId: "341800675912",
  appId: "1:341800675912:web:46e2c941bf6ce489db867d",
  measurementId: "G-49HZZ6L01Z",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
