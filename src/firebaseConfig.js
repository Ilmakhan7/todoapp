import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
 
  apiKey: "AIzaSyC7T-jTE3WxOsRyv5C1Nb-SroeQIUV-sVU",
  authDomain: "todoapp-de7a1.firebaseapp.com",
  projectId: "todoapp-de7a1",
  storageBucket: "todoapp-de7a1.appspot.com",
  messagingSenderId: "383436299365",
  appId: "1:383436299365:web:662472a81323d82b3cba8c",
  measurementId: "G-FBGTV9EDGB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db} 


