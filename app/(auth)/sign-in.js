import { Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { useRouter } from "expo-router";

export default function SignIn() {
  const { signIn, signInWithEmailAndPassword } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 44, fontWeight: "bold" }}>This is Sign-In page</Text>
      <Text>Username</Text>
      <TextInput value={userName} onChangeText={setUserName} style={{ borderColor: "black", borderWidth: 1, padding: 10, height: 40, margin: 12 }} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} style={{ borderColor: "black", borderWidth: 1, padding: 10, height: 40, margin: 12 }} />
      <Text onPress={() => router.push("/register")} style={{ backgroundColor: "red", fontSize: 40 }}>Register</Text>
      <Text onPress={() => signInWithEmailAndPassword(userName, password)} style={{ backgroundColor: "green", fontSize: 40 }}>Sign In</Text>
    </View>
  );
}
