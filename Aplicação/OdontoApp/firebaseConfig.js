import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
//import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxk_c6_3D2g0AFY9VPx2plE5gfSlKMbcM",
  authDomain: "idonto-befa4.firebaseapp.com",
  projectId: "idonto-befa4",
  storageBucket: "idonto-befa4.appspot.com",
  messagingSenderId: "427146935932",
  appId: "1:427146935932:web:a72fe05e822a7c2d2113f9",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const auth = getAuth(app);
export const firestore = getFirestore(app);
