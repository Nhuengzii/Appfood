import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react"
import Dropdown from "../../components/dropdown";

export default function Activity() {
  const user = "Baramme"; // get user from db

  const [activity, setActivity] = useState("");

  const Onclick = () => {
    
  };

  const Onclick_Next = () => {

    
    alert(activity_Data1);
  };
  const activity_Data1 = ["--", "กิจกรรมแบบที่1", "กิจกรรมแบบที่2", "กิจกรรมแบบที่3", "กิจกรรมแบบที่4", "กิจกรรมแบบที่5", "กิจกรรมแบบที่6", "กิจกรรมแบบที่7", "กิจกรรมแบบที่8"];
  const activity_Data2 = ["--", "กิจกรรมแบบที่1", "กิจกรรมแบบที่2", "กิจกรรมแบบที่3", "กิจกรรมแบบที่4", "กิจกรรมแบบที่5", "กิจกรรมแบบที่6", "กิจกรรมแบบที่7", "กิจกรรมแบบที่8"];
  const activity_Data3 = ["--", "กิจกรรมแบบที่1", "กิจกรรมแบบที่2", "กิจกรรมแบบที่3", "กิจกรรมแบบที่4", "กิจกรรมแบบที่5", "กิจกรรมแบบที่6", "กิจกรรมแบบที่7", "กิจกรรมแบบที่8"];
  const countData = ['1','2','3','4','5','6','7'];


  const [value_Activity1, setActivity1] = useState("");
  const [value_Activity2, setActivity2] = useState("");
  const [value_Activity3, setActivity3] = useState("");
  const [Count1, setCount1] = useState("");
  const [Count2, setCount2] = useState("");
  const [Count3, setCount3] = useState("");




  return (
    <ScrollView>
      <View style={styles.container}>
      


        <View style={styles.headerContainer}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>บันทึกกิจกรรม</Text>
          </View>
          <View>
            <Text style={styles.TextName}>ของคุณ "{user}"</Text>
          </View>
        </View>
      
      <View style={{width:"88%",flexDirection:"column",alignItems:"flex-start", }}>

        <View style={{ flexDirection: "row",marginTop:20 ,marginLeft:5,marginBottom:15}}>
          <Text style={{ fontSize: 20 }}>1. กิจกกรมระดับเบามาก</Text>
          <Image style={{width:20,  height:20, marginLeft:10, marginTop:5}}
            source={{
              uri: "https://www.hedcontrols.com/HED-Files/2021-Redesign/HelpCenter_icon.png?Medium",
            }}
          />
        </View>


        <Dropdown label={"----------"} data={activity_Data1} onSelect={(selected) => { setActivity1(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} />
        <View style={{alignItems:"center",width:"100%",marginTop:5}}>
          <View style={{flexDirection:"row"}}>
            <View style={{width:"23%"}}><Dropdown label={" "} data={countData} onSelect={(selected) => { setCount1(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} /></View><Text style={{fontSize:20,marginTop:10,marginLeft:8}}>ครั้ง/สัปดารห์</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" ,marginTop:20,marginLeft:5,marginBottom:15}}>
          <Text style={{ fontSize: 20 }}>2. กิจกกรมระดับเบา</Text>
          <Image style={{width:20,  height:20, marginLeft:10, marginTop:5}}
            source={{
              uri: "https://www.hedcontrols.com/HED-Files/2021-Redesign/HelpCenter_icon.png?Medium",
            }}
          />
        </View>

      
      <Dropdown label={"----------"} data={activity_Data2} onSelect={(selected) => { setActivity2(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} />
      <View style={{alignItems:"center",width:"100%",marginTop:5}}>
          <View style={{flexDirection:"row"}}>
          <View style={{width:"23%"}}><Dropdown label={" "} data={countData} onSelect={(selected) => { setCount2(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} /></View><Text style={{fontSize:20,marginTop:10,marginLeft:8}}>ครั้ง/สัปดารห์</Text>
          </View>
        </View>
        

 
        <View style={{ flexDirection: "row", marginTop:20,marginLeft:5,marginBottom:15}}>
          <Text style={{ fontSize: 20 }}>3. กิจกกรมระดับปานกลาง</Text>
          <Image style={{width:20,  height:20, marginLeft:10, marginTop:5}}
            source={{
              uri: "https://www.hedcontrols.com/HED-Files/2021-Redesign/HelpCenter_icon.png?Medium",
            }}
          />
        </View>

        <Dropdown label={"----------"} data={activity_Data3} onSelect={(selected) => { setActivity3(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} />
        <View style={{alignItems:"center",width:"100%",marginTop:5}}>
          <View style={{flexDirection:"row"}}>
          <View style={{width:"23%"}}><Dropdown label={" "} data={countData} onSelect={(selected) => { setCount3(selected) }} backgroundColor={"#FFD7D7"} width={"100%"} /></View><Text style={{fontSize:20,marginTop:10,marginLeft:8}}>ครั้ง/สัปดารห์</Text>
          </View>
        </View>

      </View>

      

      
        <View style={{ flexDirection: "row" ,marginTop:30}}>
          <TouchableOpacity onPress={Onclick} style={styles.roundButton1}>
            <View style={styles.inroundButton1}>
              <View>
                <Image
                  source={require("../../assets/images/activitypag/plus-icon.png")}
                  style={{ width: 23, height: 23 }}
                />
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    color:"black",  
    fontSize: 20,},
  buttonadd: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

