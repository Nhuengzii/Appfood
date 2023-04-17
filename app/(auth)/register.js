import { Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { useRouter } from "expo-router";

export default function Register() {
  const { signIn, createUserWithEmailAndPassword } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="<" onPress={() => router.back()} />
      <Text style={{ fontSize: 44, fontWeight: "bold" }}>This is register page</Text>
      <Text>Email</Text>
      <TextInput value={userName} onChangeText={setUserName} style={{ borderColor: "black", borderWidth: 1, padding: 10, height: 40, margin: 12 }} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} style={{ borderColor: "black", borderWidth: 1, padding: 10, height: 40, margin: 12 }} />
      <Text onPress={() => createUserWithEmailAndPassword(userName, password)} style={{ backgroundColor: "red", fontSize: 40 }}> Create Account</Text>
    </View>
  );
}
