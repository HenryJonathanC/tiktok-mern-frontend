// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFA_anC9SjIYUjLukgRI0UlAWLWN7ndgI",
  authDomain: "tiktok-clone-170f4.firebaseapp.com",
  projectId: "tiktok-clone-170f4",
  storageBucket: "tiktok-clone-170f4.appspot.com",
  messagingSenderId: "613322085263",
  appId: "1:613322085263:web:231888ac7d1c535bda71fa",
  measurementId: "G-22EFR09MG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);