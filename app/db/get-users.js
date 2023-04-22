import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import React, { useState, useEffect } from "react";

export const GetUsers = (collection, uid) => {

  const { data, setData } = useState([]);
  const docRef = db.collection(collection).doc(uid);

  /*
    useEffect(async () => {
      docRef.
    })
    */
}

