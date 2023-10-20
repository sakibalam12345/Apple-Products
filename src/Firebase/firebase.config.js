// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqRzUa0OC0Dk-c8_c7J-PW1m_8Q7QuCZQ",
  authDomain: "apple-website-auth.firebaseapp.com",
  projectId: "apple-website-auth",
  storageBucket: "apple-website-auth.appspot.com",
  messagingSenderId: "769968621217",
  appId: "1:769968621217:web:bcf182092fad8ba5a352e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;