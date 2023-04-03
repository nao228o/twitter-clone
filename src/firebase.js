// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwDy_-12EL8Gox3SB2v_KOBVj_qHbXLbA",
  authDomain: "twitter-clone-udemy-b7607.firebaseapp.com",
  projectId: "twitter-clone-udemy-b7607",
  storageBucket: "twitter-clone-udemy-b7607.appspot.com",
  messagingSenderId: "598731137014",
  appId: "1:598731137014:web:31d007ea9bd0691d2031d7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;