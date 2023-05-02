
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";


export const SetUsers = (collection: string, docRef: string, docData) => {
  setDoc(doc(db, collection, docRef), {
    username: docData.username,
    email: docData.email,
    phone: docData.phone,
    dataFilled: docData.dataFilled
  })
}
export const SetUsersPersonal = (collection: string, docRef: string, docData) => {
  //TODO: if not exist use setDoc
  updateDoc(doc(db, collection, docRef), {
    username: docData.userName,
    email: docData.email,
    phone: docData.phone,
    dataFilled: docData.dataFilled,
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

export type User = {
  email: string;
  password: string;
  userName: string;
  phone: string;
  dataFilled: boolean;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  weight: number;
  height: number;
  career: string;
  chronicDisease: string;
  foodAllergy: string;
  activities: Activity[];
}

type Activity = {
  level: string; //hard medium light etc.
  name: string; //short walking ,yoka etc.
  count: number; //times per week
}

