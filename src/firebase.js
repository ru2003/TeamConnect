// Import the functions you need from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Auth and GoogleAuthProvider

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB06Vw_jMlRsfFx1a3WOOb6htDbN2CjWXo",
  authDomain: "teamconnect-d53fa.firebaseapp.com",
  projectId: "teamconnect-d53fa",
  storageBucket: "teamconnect-d53fa.firebasestorage.app",
  messagingSenderId: "694131300275",
  appId: "1:694131300275:web:fe87cae1ee8b5645909dc6",
  measurementId: "G-LYCFGMRG09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth using the modular API
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Google Auth provider

// Export the auth and provider for use in other parts of the app
export { auth, provider };

// Export Firestore as default
export default db;
