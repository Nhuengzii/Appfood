import { Text, View, Button } from "react-native";

import { useAuth } from "../context/auth";

export default function Index() {
  const { signOut, user } = useAuth();
  if (user === null) {
    return
  }
  console.log(JSON.stringify(user, null, 4))
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> This is home screen</Text>
      <Text> You are {user.email}</Text>
      <Button title={"Sign Out"} onPress={() => signOut()} />
    </View>
  );
}
