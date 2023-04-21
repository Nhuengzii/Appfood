import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";


export const SetUsers = (collection, docRef, docData) => {
  setDoc(doc(db, collection, docRef), {
    username: docData.username,
    email: docData.email,
    phone: docData.phone,
    dataFilled: docData.dataFilled
  })
}

