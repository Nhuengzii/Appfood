import { useRouter, useSegments } from "expo-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../firebaseServices/firebaseConfig";
import React, { Context, createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"


import { SetUsers } from "../firebaseServices/database/setUser";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseServices/firebaseConfig"

async function storeCredentialData(email, password) {
  try {
    await AsyncStorage.setItem('@myemail', email);
    await AsyncStorage.setItem('@mypassword', password);
    console.log("Store password succes")
  } catch (e) {
    console.log(e)
  }
}

async function getCredentialData() {
  try {
    const email = await AsyncStorage.getItem('@myemail')
    const password = await AsyncStorage.getItem('@mypassword')
    console.log(email, password, "GEEEEET")
    return { email: email, password: password }
  } catch (e) {
    console.log(e)
  }
}


type AuthenticationContextType = {
  naiveSignIn: () => void;
  naiveSignOut: () => void;
  signInWithEmailAndPassword: (email: string, password: string) => void;
  createUserWithEmailAndPassword: (email: string, password: string, userName: string, phone: string, dataFilled: boolean) => void;
  user: UserLoginData;
}

type UserLoginData = {
  credential: User;
  username: string;
  email: string;
  phone: string;
  dataFilled: boolean;
}

const AuthContext: Context<AuthenticationContextType | null> = createContext(null);

function useAuth() {
  return useContext(AuthContext)
}

function useProtectedRoute(user: UserLoginData) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

function AuthProvider(props) {
  const [user, setAuth] = React.useState(null);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        naiveSignIn: () => setAuth({}),
        naiveSignOut: () => setAuth(null),
        signInWithEmailAndPassword: (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              getDoc(doc(db, "users", user.uid)).then((docs) => {
                const userLoginData: UserLoginData = {
                  credential: user,
                  username: docs.data().username,
                  email: docs.data().email,
                  phone: docs.data().phone,
                  dataFilled: docs.data().dataFilled
                }
                setAuth(userLoginData);
              })
              storeCredentialData(email, password);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });
        },
        createUserWithEmailAndPassword: (email, password, userName, phone, dataFilled) => {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              setAuth(user);
              SetUsers("users", user.uid, {
                username: userName,
                email: email,
                phone: phone,
                dataFilled: dataFilled
              })
              // ...
              storeCredentialData(email, password);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });
        },
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider, AuthenticationContextType, getCredentialData, storeCredentialData }
