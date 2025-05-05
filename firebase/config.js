// Import the functions you need from Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';  // Import Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJwuwSsw4u8XtQf1xpNyN8MAFyCC1wjLY",
  authDomain: "sport-tour-b36b1.firebaseapp.com",
  projectId: "sport-tour-b36b1",
  storageBucket: "sport-tour-b36b1.firebasestorage.app",
  messagingSenderId: "169301466634",
  appId: "1:169301466634:web:ee85bd3600be7373bac9f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);  // Initialize Firestore
const auth = getAuth(app);     // Initialize Auth

// Export services for use in your app
export { auth, db };
