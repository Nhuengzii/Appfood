import { Text, ScrollView, StatusBar, View } from "react-native";
import WelcomeUser from "../../components/WelcomeUser"
import InsertPersonalInfo from "../../components/InsertPersonalInfo"

export default function Personal() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <StatusBar hidden={true} />
        <WelcomeUser />
        <InsertPersonalInfo />
      </View>
    </ScrollView>
  )
}
