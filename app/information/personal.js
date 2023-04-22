import { Text, ScrollView, StatusBar, View, LogBox } from "react-native";
import { useEffect } from "react"
import WelcomeUser from "../../components/WelcomeUser"
import InsertPersonalInfo from "../../components/InsertPersonalInfo"

export default function Personal() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
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
