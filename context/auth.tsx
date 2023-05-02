import { useRouter, useSegments } from "expo-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseServices/firebaseConfig";
import React, { Context, createContext, useContext } from "react";
import { SetUsers } from "../firebaseServices/database/setUser";


type AuthenticationContextType = {
  naiveSignIn: () => void;
  naiveSignOut: () => void;
  signInWithEmailAndPassword: (email: string, password: string) => void;
  createUserWithEmailAndPassword: (email: string, password: string, userName: string, phone: string, dataFilled: boolean) => void;
  user: any
}

const AuthContext: Context<AuthenticationContextType | null> = createContext(null);

function useAuth() {
  return useContext(AuthContext)
}

function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    //router.replace("/flagNutrition");
    //return

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
  const [user, setAuth] = React.useState({});

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
              setAuth(user);
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

export { useAuth, AuthProvider, AuthenticationContextType }