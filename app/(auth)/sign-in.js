import { Text, View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { useRouter } from "expo-router";

export default function SignIn() {
  const { signIn, signInWithEmailAndPassword } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", margin: 20 }}>
        ลงชื่อเข้าใช้
      </Text>
      <View style={[styles.container, styles.button]}>
        <Text style={[styles.textgeneral, styles.text_name_pass]}>
          ชื่อผู้ใช้
        </Text>
        <TextInput
          value={userName}
          onChangeText={setUserName}
          style={styles.TextInput_name_pass}
        />
        <Text style={[styles.textgeneral, styles.text_name_pass]}>
          รหัสผ่าน
        </Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.TextInput_name_pass}
          secureTextEntry={true}
        />
        <View style={styles.router}>
          <Text
            onPress={() => signInWithEmailAndPassword(userName, password)}
            style={[styles.button, styles.signIn]}
          >
            ลงชื่อเข้าใช้
          </Text>
          <Text
            onPress={() => router.push("/register")}
            style={[styles.forget, styles.textgeneral]}
          >
            ลืมรหัสผ่าน?
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textgeneral]}>หรือ </Text>
            <Text
              onPress={() => router.push("/register")}
              style={[styles.textgeneral, styles.router]}
            >
              สร้างบัญชี
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEF6AE",
    width: 360,
    height: 560,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textgeneral: {
    fontSize: 24,
  },
  text_name_pass: {
    marginTop: 30,
    marginVertical: 30,
  },
  TextInput_name_pass: {
    borderColor: "black",
    borderBottomWidth: 1,
    height: 40,
    fontSize: 20,
    marginTop: 30,
    marginVertical: 30,
  },
  textfont: {
    fontFamily: "Inter",
  },
  signIn: {
    textAlign: "center",
    color: "white",
    width: 229,
    backgroundColor: "#FF783F",
    fontSize: 32,
    margin: 12,
  },
  forget: {
    backgroundColor: "#FF783F",
    margin: 12,
  },
  router: {
    backgroundColor: "#FF783F",
    alignItems: "center",
    color: "#D12121",
  },
});
