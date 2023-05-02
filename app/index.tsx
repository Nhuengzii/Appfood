import { StyleSheet, Text, View, Button } from "react-native";
import { useAuth } from "../context/auth";
import { useRouter } from "expo-router";
import React from "react";

export default function Index() {
  const { naiveSignOut, user } = useAuth();
  const router = useRouter()
  if (user === null) {
    return
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> This is home screen</Text>
      <Text> Hello, {user.email}</Text>
      <Button title={"Find Menu"} onPress={() => router.push("/find-menu")} />
      <Button title={"Sign Out"} onPress={() => naiveSignOut()} />
      <Button title="nutrition" onPress={() => router.push("nutrition")}></Button>
      <Button title="ธงโภชนาการ" onPress={() => router.push("flagNutrition")}></Button>
      <Button title="personal" onPress={() => router.push("/information/personal")}></Button>
    </View>
  );
}
