// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVkjRmJNrt9-rssk-GesL3euO-pAVolwQ",
  authDomain: "inventory-management-sys-b2c2b.firebaseapp.com",
  projectId: "inventory-management-sys-b2c2b",
  storageBucket: "inventory-management-sys-b2c2b.appspot.com",
  messagingSenderId: "362634825419",
  appId: "1:362634825419:web:f066cb861ba644d3ee154e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;