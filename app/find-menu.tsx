import { Text, Button, View } from "react-native";
import { useRouter } from "expo-router";


export default function FindMenu() {
  const router = useRouter();
  return (
    <View style={{ marginTop: 50, justifyContent: "space-evenly", flex: 1 }}>
      <Button title="Go back" onPress={() => router.back()} />
      <Text>Find Menu Page</Text>
      <Button title="Camera :)" onPress={() => router.push("/camera")} />
    </View>
  );
}
