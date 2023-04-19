import {
  Text,
  View,
  TextInput,
  StyleSheet,
  StatusBar,
  checkbox,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
export default function Register() {
  const { signIn, createUserWithEmailAndPassword } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const router = useRouter();
  const ButtonAlert = () =>
    Alert.alert("ผิดพลาด", "กรุณากรอกข้อมูลให้ครบถ้วน", [
      {},
      { text: "ตกลง", onPress: () => console.log("OK Pressed") },
    ]);
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
          <Text
            onPress={() => router.back()}
            style={[styles.Buttonback, { backgroundColor: "#09B7AD" }]}
          >{"<"}</Text>
        </View>
      </View>
      <View style={[{ flex: 1, flexDirection: "row", alignItems: "flex-end" }]}>
        <View>
          <Text style={styles.text_tiele1}>ลงทะเบียน</Text>
          <Text style={styles.text_tiele2}>กรุณกรองข้อมูลให้ครบถ้วน</Text>
        </View>
      </View>
      <View style={[{ flex: 2, alignItems: "center", marginVertical: 15 }]}>
        <View style={[styles.styles1, { width: "94%" }]}>
          <Text style={styles.Style_Text}>อีเมล</Text>
          <TextInput style={styles.Style_input} />
          <Text style={styles.Style_Text}>หมายเลขโทรศัพท์</Text>
          <TextInput style={styles.Style_input} />
          <Text style={styles.Style_Text}>ชื่อผู้ใช้</Text>
          <TextInput
            style={styles.Style_input}
            value={userName}
            onChangeText={setUserName}
          />
          <Text style={styles.Style_Text}>รหัสผ่าน</Text>
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
            <Text>ฉันยอมรับข้อตกลงและเงื่อนไข นโยบายความเป็นส่วนตัว?</Text>
            <Text onPress={ButtonAlert} style={[styles.button, styles.signIn]}>
              ลงทะเบียน
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Buttonback: {
    backgroundColor: "#09B7AD",
    marginLeft: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 3,
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  styles1: {
    backgroundColor: "#AEFEC4",
    borderRadius: 30,
    padding: 10,
    elevation: 2,
  },
  text_tiele1: {
    fontSize: 30,
    marginVertical: 10,
    marginLeft: 20,
  },
  text_tiele2: {
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 20,
    color: "#237E84",
  },
  Style_Text: {
    borderColor: "black",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  Style_input: {
    borderBottomWidth: 1,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  signIn: {
    textAlign: "center",
    color: "white",
    width: 229,
    backgroundColor: "#09B7AD",
    fontSize: 24,
    marginVertical: 20,
  },
});

/*
export default function Register() {
  const { signIn, createUserWithEmailAndPassword } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="<" onPress={() => router.back()} />
      <Text style={{ fontSize: 44, fontWeight: "bold" }}>This is register page</Text>
      <Text>Email</Text>
      <TextInput value={userName} onChangeText={setUserName} style={{ borderColor: "black", borderWidth: 1, padding: 10, height: 40, margin: 12 }} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} style={{ borderColor: "black", borderWidth: 1, padding: 10, height: 40, margin: 12 }} />
      <Text onPress={() => createUserWithEmailAndPassword(userName, password)} style={{ backgroundColor: "red", fontSize: 40 }}> Create Account</Text>
    </View>
  );
}
*/
