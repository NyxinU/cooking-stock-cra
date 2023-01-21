// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfXPzSnMEnwh3l46UDIP-YlZfPNMgAKyY",
  authDomain: "cooking-stock-4ee98.firebaseapp.com",
  projectId: "cooking-stock-4ee98",
  storageBucket: "cooking-stock-4ee98.appspot.com",
  messagingSenderId: "260057159242",
  appId: "1:260057159242:web:eb332882ea4256929db8b3",
  measurementId: "G-TRXY2HFRZ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Get a list of ingredients from your database
// async function getingredients(db) {
//   const ingredientsCol = collection(db, "ingredients");
//   const citySnapshot = await getDocs(ingredientsCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }
