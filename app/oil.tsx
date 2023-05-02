import { Text, View, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import ButtonBack from "../components/ButtonBack";
import React from "react";


export default function Oil() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.containButton}>
          <ButtonBack colorBg={"#8297DF"} colorStyle={"white"}></ButtonBack>
        </View>
      </View>
      <View style={styles.mainContain}>
        <View style={styles.containTitleOil}>
          <Text style={styles.title}>น้ำมัน</Text>
          <Text style={styles.title}>ไขมันต่างๆ</Text>
        </View>
        <View style={styles.containDetailOil}>
          <Text style={styles.text}>วันละ 6-8 ช้อนชา</Text>
        </View>
        <View style={styles.containTitleSugar}>
          <Text style={styles.title} >น้ำตาล เครื่องปรุงรส</Text>
        </View>
        <View style={styles.containDetailSugar}>
          <Text style={styles.text}>วันละ 6 ช้อนชา</Text>
        </View>
        <View style={styles.instandImg}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBF3",
    flexDirection: "column",
  },
  sectionHeader: {
    flex: 2/3,
    //backgroundColor: "yellow",
  },
  containButton: {
    top: "50%",
    left: "7%",
    width: "12.5%",
  },
  mainContain: {
    width: "100%",
    flex: 4,
    //backgroundColor: "#FFFBF3",
    alignItems: "center",
  },
  containTitleOil: {
    width: "50%",
    height: "12%",
    backgroundColor: "#FDE9C0",
    alignItems: "center",
    justifyContent: "center",
    top: "5%",
    borderRadius: 20,
  },
  containDetailOil: {
    width: "52%",
    height: "9%",
    backgroundColor: "#FFFFFF",
    top: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderStyle: "dashed",
    borderWidth: 5,
    borderColor: "#FDE8C0",
  },
  containTitleSugar: {
    width: "62%",
    height: "8%",
    backgroundColor: "#C0F6FD",
    alignItems: "center",
    justifyContent: "center",
    top: "15%",
    borderRadius: 20,
  },
  containDetailSugar: {
    width: "44%",
    height: "10%",
    backgroundColor: "#FFFFFF",
    top: "17%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderStyle: "dashed",
    borderWidth: 5,
    borderColor: "#A2F6FC",
  },
  instandImg: {
    width: "60%",
    height: "20%",
    top: "24%",
    backgroundColor: "red",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",

  },
});
