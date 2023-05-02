import { View, Text, Button } from "react-native"
import { useRouter } from "expo-router"
import React from "react"

export default function ToBeFill() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 4 }}>
        ลงทะเบียนสำเร็จ
      </Text>
      <Text style={{ fontSize: 4 }}>
        กรอกข้อมูลส่วนตัว
      </Text>
      <Button title=">" onPress={() => router.push("/information/personal")} />
    </View>
  )
}
