
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

export const GetUsers = (collection, docRef) => {
  const [data, setData] = useState(null);

  const docSnap = getDoc(doc(db, collection, docRef));
  docSnap.then((docs) => {
    // console.log(doc.data().firstName);
    setData(docs.data());
  })
  return data
}


