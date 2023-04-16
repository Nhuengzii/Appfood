import { View, StyleSheet, Image } from "react-native"

export default function App() {
  const splashImage = require("../assets/splash.png")
  return (
    <View style={styles.container}>
      <Image source={splashImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
