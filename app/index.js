import { Text, View, Button } from "react-native";

import { useAuth } from "../context/auth";
import { useRouter } from "expo-router";

export default function Index() {
  const { signOut, user } = useAuth();
  const router = useRouter()
  if (user === null) {
    return
  }
  console.log(JSON.stringify(user, null, 4))
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> This is home screen</Text>
      <Text> Hello, {user.email}</Text>
      <Button title={"Find Menu"} onPress={() => router.push("/find-menu")} />
      <Button title={"Sign Out"} onPress={() => signOut()} />
    </View>
  );
}
