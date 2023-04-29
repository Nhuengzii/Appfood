import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SmartCamera() {
  const [type, setType] = useState(CameraType.front);
  const [permissin, requestPermission] = Camera.useCameraPermissions();
  const router = useRouter()
  if (!permissin) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Camera permission not granted</Text>
      </View>
    )
  }

  if (!permissin.granted) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Camera permission not granted</Text>
        <Button title={"Request Permission"} onPress={() => requestPermission()} />
      </View>
    )
  }

  function toggleCamera() {
    setType((type) => (type === CameraType.back ? CameraType.front : CameraType.back))
  }

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ marginVertical: 50, fontSize: 25, fontWeight: "bold", color: "white" }} onPress={() => { router.back() }}>Exit</Text>
      <View style={styles.container}>
        <Camera type={type} style={styles.camera}>
          <View>
            <TouchableOpacity onPress={toggleCamera}>
              <Text style={{ fontSize: 20, color: "white" }}>Click me to Flip</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    maxHeight: 500,
  }
})
