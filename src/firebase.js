import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBStIRTQP-0QV_cdIaTq0njlwYp5y47mhg",
  authDomain: "zbekz-24572.firebaseapp.com",
  projectId: "zbekz-24572",
  storageBucket: "zbekz-24572.appspot.com",
  messagingSenderId: "681532093933",
  appId: "1:681532093933:web:e8f65b426c2a162aa763e4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
