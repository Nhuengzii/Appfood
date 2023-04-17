import { Text, View, TextInput, StyleSheet,ScrollView,SafeAreaView} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { useRouter } from "expo-router";

export default function SignIn() {
  const { signIn, signInWithEmailAndPassword } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >

      <View style={styles.flex1}>
        <Text style={[styles.Texttitle, styles.marginatitle]}>
          ลงชื่อเข้าใช้
        </Text>
      </View>
      <View style={styles.flex3}>
        <Text style={[styles.Textfont, styles.text_name_pass]}>ชื่อผู้ใช้</Text>
        <TextInput
          value={userName}
          onChangeText={setUserName}
          style={styles.TextInput_name_pass}
        />
        <Text style={[styles.Textfont, styles.text_name_pass]}>รหัสผ่าน</Text>
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
            style={[styles.forget, styles.Textfont]}
          >
            ลืมรหัสผ่าน?
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.Textfont]}>หรือ </Text>
            <Text
              onPress={() => router.push("/register")}
              style={[styles.Textfont, styles.router]}
            >
              สร้างบัญชี
            </Text>
          </View>
        </View>
        
      </View>
      
      <View style={styles.flex1}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  flex1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  flex2: {
    flex: 2,
    backgroundColor: "red",
  },
  flex3: {
    flex: 3,
    backgroundColor: "#FEF6AE",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  Textfont: {
    fontSize: 20,
  },
  Texttitle: {
    fontSize: 30,
  },
  marginatitle: {
    marginLeft: 10,
    marginVertical: 20,
  },
  TextInput_name_pass: {
    borderColor: "black",
    borderBottomWidth: 1,
    height: 40,
    fontSize: 24,
    marginTop: 10,
    marginVertical: 30,
  },
  text_name_pass: {
    marginTop: 20,
    marginVertical: 20,
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
    backgroundColor: "#FF783F",
    fontSize: 24,
    marginVertical: 12,
  },
  forget: {
    backgroundColor: "#FEF6AE",
    marginVertical: 12,
  },
  router: {
    backgroundColor: "#FEF6AE",
    alignItems: "center",
    color: "#D12121",
    
  },
});

/*
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
    marginTop: 20,
    marginVertical: 20,
  },
  TextInput_name_pass: {
    borderColor: "black",
    borderBottomWidth: 1,
    height: 40,
    fontSize: 24,
    marginTop: 10,
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
    marginVertical: 12,
  },
  forget: {
    backgroundColor: "#FEF6AE",
    marginVertical: 12,
  },
  router: {
    backgroundColor: "#FEF6AE",
    alignItems: "center",
    color: "#D12121",
    
  },
});
*/
