import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

export default function SignIn() {
  const { naiveSignIn, signInWithEmailAndPassword } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <ScrollView>
      <StatusBar hidden={true} />

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View
          style={[
            {
              flex: 1,
              alignItems: "flex-start",
              marginTop: 15,
              marginVertical: 20,
            },
          ]}
        >
        <TouchableHighlight style={[styles.Buttonback]}>
          <Ionicons name="md-chevron-back" size={30} color="#ffffff" />
        </TouchableHighlight>
        </View>
      </View>

      <View style={[{ flex: 1, flexDirection: "row", alignItems: "flex-end" }]}>
        <View>
          <Text style={styles.text_tiele1}>ลงชื่อเข้าใช้</Text>
        </View>
      </View>

      <View style={[{ flex: 2, alignItems: "center", marginVertical: 15 }]}>
        <View style={[styles.styles1, { width: "94%" }]}>
          <Text style={[styles.Style_Text, { marginVertical: 20 }]}>
            ชื่อผู้ใช้
          </Text>
          <TextInput
            style={styles.Style_input}
            value={userName}
            onChangeText={setUserName}
          />
          <Text style={[styles.Style_Text, { marginVertical: 20 }]}>
            รหัสผ่าน
          </Text>
          <TextInput
            style={styles.Style_input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <TouchableHighlight
              onPress={() => {
                signInWithEmailAndPassword(userName, password)
              }}
              underlayColor="#FF7800" style={[styles.button, styles.signIn]}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>ลงชื่อเข้าใช้</Text>
              </View>
            </TouchableHighlight>
            <Text
              onPress={() => router.push("/register")}
              style={[styles.forget]}
            >
              ลืมรหัสผ่าน?
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18, marginVertical: 10 }}>หรือ </Text>
              <Text
                onPress={() => router.push("/register")}
                style={[styles.router]}
              >
                สร้างบัญชี
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Buttonback: {
    backgroundColor: "#FF783F",
    marginLeft: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    },
  styles1: {
    backgroundColor: "#FEF6AE",
    borderRadius: 30,
    padding: 10,
    elevation: 2,
  },
  text_tiele1: {
    fontSize: 30,
    marginVertical: 10,
    marginLeft: 20,
    fontWeight: "bold",
  },
  text_tiele2: {
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 20,
    color: "#237E84",
    fontWeight: "bold",
  },
  Style_Text: {
    borderColor: "black",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    marginVertical: 20,
  },
  Style_input: {
    borderBottomWidth: 1,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
  },
  button: {
    padding: 10,
    elevation: 2,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  signIn: {
    textAlign: "center",
    color: "white",
    width: 229,
    height: 54,
    backgroundColor: "#FF783F",
    fontSize: 24,
    marginVertical: 15,
  },
  forget: {
    fontSize: 18,
    marginVertical: 10,
  },
  router: {
    alignItems: "center",
    color: "#D12121",
    fontSize: 18,
    marginVertical: 10,
  },
});

