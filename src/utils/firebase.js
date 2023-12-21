// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe4SRg-PVQgMfd0Cu1I5nVclmYOrri3b4",
  authDomain: "netflix-clone-38087.firebaseapp.com",
  projectId: "netflix-clone-38087",
  storageBucket: "netflix-clone-38087.appspot.com",
  messagingSenderId: "202904989754",
  appId: "1:202904989754:web:4d5486c1de2d5ad8d90503",
  measurementId: "G-DR7VKG3VQ4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
