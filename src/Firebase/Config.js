import firebase from "firebase";
import 'firebase/auth';
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZ7gIxXnuEzy6Qfdg7Tw2C2lBBlfXDoVg",
  authDomain: "olx-clone-fd08e.firebaseapp.com",
  projectId: "olx-clone-fd08e",
  storageBucket: "olx-clone-fd08e.appspot.com",
  messagingSenderId: "490127440354",
  appId: "1:490127440354:web:f57942b424fa6eb0a8e1bb",
  measurementId: "G-2NL4Y430PX"
};

export const FirebaseApp= firebase.initializeApp(firebaseConfig);

