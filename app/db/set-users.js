import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { View, Text } from "react-native"


function setInsert(collection, docRef, name, weight) {
  const insertPromise = new Promise((resolve, reject) => {
    setDoc(doc(db, collection, docRef), {
      name: name,
      weight: weight
    })
    resolve("Set Success")
    reject("noSet")
  })

  return insertPromise;
}


export const SetUsers = ({ docData }) => {
  //usage <SetUsers docData={{collection:string, docRef:string, name:string, weight:int }}  
  setInsert(docData.collection, docData.docRef, docData.name, docData.weight).then((value) => {
    console.log(value)
    return (
      <View>
        <Text>Yes</Text>
        <Text>{docData.name}</Text>
        <Text>{docData.weight}</Text>
      </View>
    )
  }).catch((err) => {
    console.log(err);
    return (
      <View>
        <Text>Error Setting user doc</Text>
      </View>
    )
  })
}

