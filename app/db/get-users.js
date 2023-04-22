import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import React, { useState, useEffect } from "react"

export const GetUsers = (collection, docRef) => {
  const data = getDoc(doc(db, collection, docRef)).then((docSnap) => {
    return docSnap.data()
  })
  return data
}

