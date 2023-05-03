
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react"
import Dropdown from "../../components/dropdown";
import { useAuth } from "../../context/auth"
import { GetUsers } from "../../firebaseServices/database/getUser";
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function Activity() {
  const { user } = useAuth()

  const data = GetUsers("users", user.credential.uid);
  const [username, setUsername] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [number, onChangeNumber] = React.useState('');

  const activity_Data1 = ["--", "กิจกรรมแบบที่1", "กิจกรรมแบบที่2", "กิจกรรมแบบที่3", "กิจกรรมแบบที่4", "กิจกรรมแบบที่5", "กิจกรรมแบบที่6", "กิจกรรมแบบที่7", "กิจกรรมแบบที่8"];
  const activity_Data2 = ["--", "กิจกรรมแบบที่1", "กิจกรรมแบบที่2", "กิจกรรมแบบที่3", "กิจกรรมแบบที่4", "กิจกรรมแบบที่5", "กิจกรรมแบบที่6", "กิจกรรมแบบที่7", "กิจกรรมแบบที่8"];
  const activity_Data3 = ["--", "กิจกรรมแบบที่1", "กิจกรรมแบบที่2", "กิจกรรมแบบที่3", "กิจกรรมแบบที่4", "กิจกรรมแบบที่5", "กิจกรรมแบบที่6", "กิจกรรมแบบที่7", "กิจกรรมแบบที่8"];
  const countData = ['1', '2', '3', '4', '5', '6', '7'];


  const [value_Activity1, setActivity1] = useState("");
  const [value_Activity2, setActivity2] = useState("");
  const [value_Activity3, setActivity3] = useState("");
  const [Count1, setCount1] = useState("");
  const [Count2, setCount2] = useState("");
  const [Count3, setCount3] = useState("");

  useEffect(() => {
    if (data != null) {
      setUsername(data.username)
    }
  }, [data])


  const Onclick = () => {
    setModalVisible(!modalVisible)
  };

  const Onclick_Next = () => {
    alert("หน้าถัดไป");
  };


  const AddAct_db = () => {
    if (number == "" || number == null) {
      alert("กรุณาใส่ชื่อกิจกรรม");
      setModalVisible(true);
      return;
    }
    for (let i = 0; i < activity_Data1.length; i++) {
      if (number == activity_Data1[i]) {
        alert("มีกิจกรรมนี้แล้ว");
        return;
      }
      //debug
      //console.log(activity_Data1[i]===number,activity_Data1[i],number);
    }
    activity_Data1.push(number);
    activity_Data2.push(number);
    activity_Data3.push(number);
    //ส่งขึ้น db ด้วย
    Alert.alert('สำเร็จ',
      'กิจกรรมถูกบันทึกเรียบร้อย',
      [
        { text: 'ตกลง', onPress: () => console.log('Ok Pressed') },
      ],
      { cancelable: false }
    );
    console.log(activity_Data1);

    //get ข้อมูลจาก db มาใส่ใน activity_Data1,2,3
    setModalVisible(!modalVisible)
  };


  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>ชื่อกิจกรรม</Text>
            <TextInput
              style={[styles.modalinput, { backgroundColor: '#FFD7D7' }]}
              onChangeText={onChangeNumber}
              value={number} />
            <TouchableOpacity
              style={[styles.buttonaddinmodal, { backgroundColor: '#ED7E7E', }]}
              onPress={() => AddAct_db()}>
              <Text style={{ fontSize: 17, color: "white" }}>เพิ่ม</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonaddinmodal, { backgroundColor: '#f0f0f0', }]}
              onPress={Onclick}>
              <Text style={{ fontSize: 17 }}>ยกเลิก</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>บันทึกกิจกรรม</Text>
          </View>
          <View>
            <Text style={styles.TextName}>ของคุณ "{username}"</Text>
          </View>
        </View>

        <View style={{ width: "88%", flexDirection: "column", alignItems: "flex-start", }}>

          <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 5, marginBottom: 15 }}>
            <Text style={{ fontSize: 20 }}>1. กิจกกรมระดับเบามาก</Text>

            <AntDesign name="questioncircleo" size={20} color="black" style={{ marginTop: 5, marginLeft: 5 }} />

          </View>


          <Dropdown label={"----------"} data={activity_Data1} onSelect={(selected) => { setActivity1(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} />
          <View style={{ alignItems: "center", width: "100%", marginTop: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "23%" }}><Dropdown label={" "} data={countData} onSelect={(selected) => { setCount1(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} /></View><Text style={{ fontSize: 20, marginTop: 10, marginLeft: 8 }}>ครั้ง/สัปดารห์</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 5, marginBottom: 15 }}>
            <Text style={{ fontSize: 20 }}>2. กิจกกรมระดับเบา</Text>
            <AntDesign name="questioncircleo" size={20} color="black" style={{ marginTop: 5, marginLeft: 5 }} />

          </View>


          <Dropdown label={"----------"} data={activity_Data2} onSelect={(selected) => { setActivity2(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} />
          <View style={{ alignItems: "center", width: "100%", marginTop: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "23%" }}><Dropdown label={" "} data={countData} onSelect={(selected) => { setCount2(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} /></View><Text style={{ fontSize: 20, marginTop: 10, marginLeft: 8 }}>ครั้ง/สัปดารห์</Text>
            </View>
          </View>



          <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 5, marginBottom: 15 }}>
            <Text style={{ fontSize: 20 }}>3. กิจกกรมระดับปานกลาง</Text>

            <AntDesign name="questioncircleo" size={20} color="black" style={{ marginTop: 5, marginLeft: 5 }} />

          </View>

          <Dropdown label={"----------"} data={activity_Data3} onSelect={(selected) => { setActivity3(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} />
          <View style={{ alignItems: "center", width: "100%", marginTop: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "23%" }}><Dropdown label={" "} data={countData} onSelect={(selected) => { setCount3(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} /></View><Text style={{ fontSize: 20, marginTop: 10, marginLeft: 8 }}>ครั้ง/สัปดารห์</Text>
            </View>
          </View>

        </View>




        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <TouchableOpacity onPress={Onclick} style={styles.roundButton1}>
            <View style={styles.inroundButton1}>
              <View>
                <Entypo name="plus" size={40} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.TextAdd}>เพิ่มกิจกรรม</Text>
        </View>

        <TouchableOpacity onPress={Onclick_Next} style={styles.buttonNext}>
          <Text style={styles.InTextbuttonNext}>ถัดไป</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  headerContainer: {
    width: "90%",
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,

  },
  headerWrapper: {
    backgroundColor: "#1E807A",
    alignItems: "center",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    padding: 20,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 30,
  },
  TextName: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 20,
  },
  TextAdd: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 10,
    marginLeft: 20,
  },
  headerText: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80%",
    marginVertical: 20,
  },
  bodyAddAct: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  roundButton1: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "black",
  },
  inroundButton1: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "white",
  },
  buttonNext: {
    marginTop: 20,
    marginBottom: 100,
    backgroundColor: "#ED7E7E",
    width: 130,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  InTextbuttonNext: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  IconTitleout: {
    width: 20,
    height: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  IconTitlein: {
    width: 15,
    height: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalinput: {
    height: 40,
    margin: 12,
    fontSize: 18,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 200,
  },
  buttonaddinmodal: {
    borderRadius: 5,
    height: 30,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

