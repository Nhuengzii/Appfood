import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useState } from "react";

export const GetUsers = (collection, docRef) => {
  [data, setData] = useState("");

  const docSnap = getDoc(doc(db, collection, docRef));
  docSnap.then((doc) => {
    // console.log(doc.data().firstName);
    setData(doc.data());
  })
  return data
}


