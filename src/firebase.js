// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAEBLy9FnFNuxdLcyvYecNylKRt72SaTBU",
  authDomain: "domainchat-5ca03.firebaseapp.com",
  projectId: "domainchat-5ca03",
  storageBucket: "domainchat-5ca03.appspot.com",
  messagingSenderId: "535683764599",
  appId: "1:535683764599:web:3958dc1f7dc8173bca5172",
  measurementId: "G-1G4EZG1RXE",
};
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
export default getFirestore(firebaseApp);
