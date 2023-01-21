import { collection, addDoc, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase";

// Add a new document with a generated id.
export const addIngredient = (name) =>
  addDoc(collection(db, "ingredients"), {
    name,
  });

// Get a list of ingredients from your database
export async function getIngredients() {
  const ingredientsCol = collection(db, "ingredients");
  const citySnapshot = await getDocs(ingredientsCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
