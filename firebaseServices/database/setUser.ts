
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";


export const SetUsers = (collection, docRef, docData) => {
  setDoc(doc(db, collection, docRef), {
    username: docData.username,
    email: docData.email,
    phone: docData.phone,
    dataFilled: docData.dataFilled
  })
}
export const SetUsersPersonal = (collection, docRef, docData) => {
  updateDoc(doc(db, collection, docRef), {
    firstName: docData.firstName,
    lastName: docData.lastName,
    gender: docData.gender,
    age: docData.age,
    weight: docData.weight,
    height: docData.height,
    career: docData.career,
    chronicDisease: docData.chronicDisease,
    foodAllergy: docData.foodAllergy
  })
}
