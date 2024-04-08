// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG7pRKJ7_5oRojDrTrU3TUN1W0YSzeldE",
  authDomain: "my-home-estate.firebaseapp.com",
  projectId: "my-home-estate",
  storageBucket: "my-home-estate.appspot.com",
  messagingSenderId: "122087768212",
  appId: "1:122087768212:web:9442fa67c337ef66267481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);