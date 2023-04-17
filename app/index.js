import { Text, View, Button } from "react-native";

import { useAuth } from "../context/auth";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> This is home screen</Text>
      <Button title={"Sign Out"} onPress={() => signOut()} />
    </View>
  );
}
