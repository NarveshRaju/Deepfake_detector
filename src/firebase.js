import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyDhXkIN_AOaZAzzkq1EPsNvazulh_cxyIk",
  authDomain: "deepshield-5a596.firebaseapp.com",
  projectId: "deepshield-5a596",
  storageBucket: "deepshield-5a596.appspot.com", // Fix the typo here
  messagingSenderId: "1003754173715",
  appId: "1:1003754173715:web:07da10c463fd43b72f56e6",
  measurementId: "G-FHYDS1NF3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export Firebase authentication instance
