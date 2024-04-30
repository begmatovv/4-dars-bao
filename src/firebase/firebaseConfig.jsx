// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCk12vXU6xJDp0I4QL1EAkT7UV_vbMVjD8",
  authDomain: "comfy-bao.firebaseapp.com",
  projectId: "comfy-bao",
  storageBucket: "comfy-bao.appspot.com",
  messagingSenderId: "603778820428",
  appId: "1:603778820428:web:b29f58b582de4738fcc7e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();