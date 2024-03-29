import { Camera, CameraPictureOptions, CameraType, FlashMode } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons"
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import React from "react";
import * as tfjs from "@tensorflow/tfjs"
import { fetch, decodeJpeg } from "@tensorflow/tfjs-react-native";

async function convertToTensor(uri: string) {
  const response = await fetch(uri, {}, { isBinary: true });
  console.log("R deady")
  const imageDataArrayBuffer = await response.arrayBuffer();
  const imageData = new Uint8Array(imageDataArrayBuffer);
  const imageTensor = decodeJpeg(imageData);
  console.log("Convert Succes!")
  console.log(imageTensor.shape)
}

export default function SmartCamera() {
  const [type, setType] = useState(CameraType.back);
  const [permissin, requestPermission] = Camera.useCameraPermissions();
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [photo, setPhoto] = useState(null);
  const camRef = useRef<Camera>()
  const router = useRouter()
  useEffect(() => {
    (async () => {
      await tfjs.ready()
    })();
  }, [])
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
  function toggleFlash() {
    setFlashMode((flashMode) => flashMode == FlashMode.torch ? FlashMode.off : FlashMode.torch)
  }

  async function takepic() {
    const options: CameraPictureOptions = {
      quality: 1,
      base64: true,
      exif: false
    }
    const newPhoto = await camRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  }
  if (photo) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
        <Image source={{ uri: "data:image/jpg;base64," + photo.base64 }} style={{ alignSelf: "stretch", flex: 1, maxHeight: 512 }} />
        <Text style={{ fontSize: 30, fontWeight: "bold" }} > อยากกินหรอ </Text>
        <View style={{ flexDirection: "row" }} >
          <Button title="ใช่" onPress={async () => {
            const start = Date.now();
            await convertToTensor("data:image/jpg;base64," + photo.base64)
            const end = Date.now();
            Alert.alert(`Execution time in ${end - start} ms`)
          }} />
          <Button title="ไม่" onPress={() => { setPhoto(null) }} />
        </View>
      </ View>
    )
  }
  else {
    return (
      <View style={{ flex: 1, backgroundColor: "black", justifyContent: "space-evenly" }}>
        <View style={{ flexDirection: "row", marginTop: 35, flex: 0, justifyContent: "space-between" }}>
          <Text style={{ fontSize: 40, fontWeight: "bold", color: "white" }} onPress={() => { router.back() }}>Exit</Text>
          <Entypo name="flash" size={40} color="white" onPress={() => toggleFlash()} />
        </View>
        <View style={styles.container}>
          <Camera type={type} style={styles.camera} flashMode={flashMode} ref={camRef} >
            <Image source={require("../../assets/cameraFrame.png")} resizeMode="center" style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
          </Camera>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: 100 }}>
          <Entypo name="camera" size={40} color="white" onPress={takepic} />
        </ View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    maxHeight: 512,
  }
})
