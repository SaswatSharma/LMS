// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv4Mn98JIu_z2LlXEm_ppvSDK0lbMXy7s",
  authDomain: "lmschatbot-d7329.firebaseapp.com",
  projectId: "lmschatbot-d7329",
  storageBucket: "lmschatbot-d7329.appspot.com",
  messagingSenderId: "636137086076",
  appId: "1:636137086076:web:b6ff7361ff7f86ba5bbdf9",
  measurementId: "G-FN4PY0J07V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
