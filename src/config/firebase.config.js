// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK865aYyrW9Q5ptA-92zfEivQ82NW2mls",
  authDomain: "keto-journey.firebaseapp.com",
  projectId: "keto-journey",
  storageBucket: "keto-journey.appspot.com",
  messagingSenderId: "385118369640",
  appId: "1:385118369640:web:95380b3c9a8d35a5af48dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;