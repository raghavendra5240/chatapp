import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPeQlyE5CKh6loIbSOXjLKOgFYJAbEZt4",
  authDomain: "chatapp-9ae2c.firebaseapp.com",
  projectId: "chatapp-9ae2c",
  storageBucket: "chatapp-9ae2c.appspot.com",
  messagingSenderId: "986020338654",
  appId: "1:986020338654:web:b6e4fdd9e26f22dbeedb4f"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
