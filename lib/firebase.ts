import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjhsDd-ywNTZG993hIAGb56kfHatSVEDE",
  authDomain: "fliy-clone.firebaseapp.com",
  projectId: "fliy-clone",
  storageBucket: "fliy-clone.firebasestorage.app",
  messagingSenderId: "741554352746",
  appId: "1:741554352746:web:960094e6ee7c615aa19013",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  // fallback for hot reload where auth may already be initialized
  auth = getAuth(app);
}

export { auth };

