import {
  StyleSheet,
  View,
  Text,
} from "react-native"

import { GetUsers } from "../firebaseServices/database/getUser";
import { useAuth } from "../context/auth"

export default function WelcomeUser() {
  const { user } = useAuth()
  const data = GetUsers("users", user.uid);
  return (
    <View style={styles.container}>

      <View style={styles.leftContainer}>
        <Text>picture</Text>
      </View>

      <View style={styles.rightContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.welcomeText}>ยินดีต้อนรับ</Text>
        </View>
        <View style={{ flex: 1, marginTop: 10 }}>
          <Text style={styles.userNameText}>"{data.firstName}"</Text>
        </View>
        <View style={styles.personalInfoWrapper}>
          <Text style={styles.personalInfoText}>ข้อมูลส่วนตัว</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 20,
    marginTop: 20,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  welcomeText: {
    fontSize: 30
  },
  userNameText: {
    fontSize: 22
  },
  personalInfoWrapper: {
    flex: 3,
    marginTop: 20,
    paddingVertical: 13,
    paddingHorizontal: 17,
    borderRadius: 200,
    backgroundColor: "#99F9B4"
  },
  personalInfoText: {
    fontSize: 23
  }

})
