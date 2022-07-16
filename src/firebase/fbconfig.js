// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV2IyNVWCVQIOl872reW9nS-ey3OrVKvE",
  authDomain: "giddy-mobile.firebaseapp.com",
  projectId: "giddy-mobile",
  storageBucket: "giddy-mobile.appspot.com",
  messagingSenderId: "706327131834",
  appId: "1:706327131834:web:16fe4902fa7a3a3de1f483",
  measurementId: "G-H8MK54HMKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);