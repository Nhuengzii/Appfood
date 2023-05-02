
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState, useEffect } from "react";

export const GetUsers = (collection: string, docRef: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getDoc(doc(db, collection, docRef)).then((docs) => {
      setData(docs.data());
    })
  }, [])
  return data
}


