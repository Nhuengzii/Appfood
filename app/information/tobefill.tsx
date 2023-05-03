import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function ToBeFill() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Ionicons name="md-checkmark-circle-outline" size={250} color="#41C7AF" />
      <View>
        <Text style={styles.text1}>
          ลงทะเบียนสำเร็จ
        </Text>
      </View>
      <View style={styles.text2}>
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>
          กรอกข้อมูลส่วนตัว
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/information/personal")}
        style={styles.button2}
      >
        <View style={styles.buttot1}>
          <MaterialIcons name="navigate-next" size={60} color="#AE9090" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  buttot1: {
    backgroundColor: "#ffffff",
    width: 65,
    height: 65,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    backgroundColor: "#AE9090",
    width: 80,
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: { 
    fontSize: 32, 
    fontWeight: "bold", 
    color: "#76B744" 
  },
  text2: {
    backgroundColor: "#FE9E9E",
    width: "80%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginTop: 50,
    marginBottom: 32,
  },
});
