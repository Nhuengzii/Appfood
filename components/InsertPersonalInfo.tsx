import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native"

import { useState } from "react"
import Dropdown from "./dropdown"
import { SetUsersPersonal } from "../firebaseServices/database/setUser"
import { useAuth } from "../context/auth"
import { useRouter } from "expo-router"

export default function InsertPersonalInfo() {
  const router = useRouter();
  const { user } = useAuth();

  const careerData = ["--", "รับข้าราชการ", "ข้าราชการบำนาญ", "เกษตรกร", "ธุรกิจส่วนตัว", "นักข่าว", "จิตรกร", "ศิลปิน"];
  const diseaseData = ["--", "โรคเบาหวาน", "โรคความดันโลหิตสูง", "โรคหัวใจ", "โรคโลหิตจาง", "โรคไต", "โรคภูมิแพ้", "โรคหอบหืด", "โรคอ้วน"];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [career, setCareer] = useState("");
  const [disease, setDisease] = useState("");
  const [foodAllergy, setFoodAllergy] = useState("");
  const [fullName, setFullName] = useState("");

  const docData = {
    firstName: firstName,
    lastName: lastName,
    gender: gender.trim(),
    age: parseInt(age.trim()),
    weight: parseFloat(weight.trim()),
    height: parseFloat(height.trim()),
    career: career,
    chronicDisease: disease,
    foodAllergy: foodAllergy,
  }


  return (
    <View style={styles.container}>
      <View style={styles.oneChildContainer}>
        <Text style={styles.textAboveInput}>ชื่อ-นามสกุล</Text>
        <TextInput
          style={styles.inputBox}
          placeholder={"ฟ้าใส ใจดี"}
          value={fullName}
          onChangeText={(value) => {
            setFullName(value);
            setFirstName(value.split(" ")[0]);
            setLastName(value.split(" ")[1]);
          }} />
      </View>

      <View style={styles.twoChildContainer}>
        <View style={styles.halfRowContainer}>
          <Text style={styles.textAboveInput}>เพศ</Text>
          <TextInput style={styles.inputBox} value={gender} onChangeText={setGender} />
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.halfRowContainer}>
          <Text style={styles.textAboveInput}>อายุ</Text>
          <TextInput style={styles.inputBox} value={age} onChangeText={setAge} />
        </View>
      </View>

      <View style={styles.twoChildContainer}>
        <View style={styles.halfRowContainer}>
          <Text style={styles.textAboveInput}>น้ำหนัก</Text>
          <TextInput style={styles.inputBox} value={weight} onChangeText={setWeight} />
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.halfRowContainer}>
          <Text style={styles.textAboveInput}>ส่วนสูง</Text>
          <TextInput style={styles.inputBox} value={height} onChangeText={setHeight} />
        </View>
      </View>

      <View style={styles.oneChildContainer}>
        <Text style={styles.textAboveInput}>อาชีพ</Text>
        <Dropdown label={"----------"} data={careerData} onSelect={(selected) => { setCareer(selected) }} backgroundColor={"#FFFFFF"} width={"100%"} />
      </View>

      <View style={styles.oneChildContainer}>
        <Text style={styles.textAboveInput}>โรคประจำตัว</Text>
        <Dropdown label={"----------"} data={diseaseData} onSelect={(selected) => { setDisease(selected) }} backgroundColor={"#FFFFFF"} width={"100%"} />
      </View>

      <View style={styles.oneChildContainer}>
        <Text style={styles.textAboveInput}>ประวัติการแพ้อาหาร</Text>
        <TextInput style={styles.inputBox} placeholder={"ไม่มี , แพ้ถั่ว , แพ้นม  ฯลฯ"} value={foodAllergy} onChangeText={setFoodAllergy} />
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={() => { dbAdd(user.uid, docData); router.push("/information/activity"); }}>
        <Text style={styles.nextButtonText}>ถัดไป</Text>
      </TouchableOpacity>
    </View>
  )

}

function dbAdd(uid, docData) {

  SetUsersPersonal("users", uid, docData);
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 2,
    backgroundColor: "#F8FFDD",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10
  },
  oneChildContainer: {
    width: "90%",
    flex: 1,
    alignItems: "stretch",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  twoChildContainer: {
    width: "90%",
    flex: 1,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  halfRowContainer: {
    flex: 1.3,
    marginRight: 40
  },
  textAboveInput: {
    fontSize: 23,
    margin: 5,
  },
  inputBox: {
    backgroundColor: "#FFFFFF",
    height: 35,
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 10,
    fontSize: 16
  },
  nextButton: {
    flex: 1,
    marginTop: 50,
    borderRadius: 30,
    margin: 5,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "#ED7E7E"
  },
  nextButtonText: {
    fontSize: 25,
    color: "#FFFFFF"
  }
})
