import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { useRouter } from "expo-router";
import ButtonBack from "../components/ButtonBack";
import React from "react";

export default function RiceFlour() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.containButton}>
          <ButtonBack colorBg={"#8297DF"} colorStyle={"white"} />
        </View>
        <View style={styles.containTitle}>
          <Text style={styles.titleHeader}>ข้าว-แป้ง</Text>
        </View>
      </View>
      <View style={styles.sectionMain}>
        <View style={styles.containDetail}>
          <Text style={styles.titleDetailRed}>วันละ 5 - 9 ทัพพี</Text>
          <Text style={styles.titleDetail}>เฉลี่ย 3 มื้อ</Text>
          <View style={styles.containParagraph}>
            <Text style={styles.textInParagraph}>เป็นแหล่งพลังงานหลักและ</Text>
            <Text style={styles.textInParagraph}>ควรเลือกชนิดที่ขัดสีน้อย</Text>
            <Text style={styles.textInParagraph}>ให้สารอาหารหลักคือ</Text>
            <Text style={styles.textInParagraphBlue}>คาร์โบไฮเดรต</Text>
          </View>
        </View>
      </View>
      <View style={styles.sectionImage}>
        <View style={styles.instandImage}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    flex: 2,
    //backgroundColor: "red",
    position: "relative",
  },
  containTitle: {
    width: "40%",
    height: "36%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EED7AB",
    position: "absolute",
    top: 90,
    left: 130,
    borderRadius: 20,
  },
  titleHeader: {
    fontSize: 22,
    fontWeight: "bold",
  },
  sectionMain: {
    flex: 4,
    //backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  containButton: {
    width: 50,
    height: 50,
    //backgroundColor: "yellow",
    position: "absolute",
    left: 20,
    top: 50,
  },
  containDetail: {
    width: "80%",
    height: "90%",
    //backgroundColor: "green",
    position: "absolute",
    top: 20,
    borderStyle: "dashed",
    borderWidth: 5,
    borderColor: "#EED7AB",
    borderRadius: 20,
    alignItems: "center",
  },
  containParagraph: {
    top: 60,
    width: "100%",
    height: "50%",
    //backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  titleDetailRed: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D67E63",
    top: 20,
  },
  titleDetail: {
    fontSize: 22,
    fontWeight: "bold",
    top: 40,
  },
  textInParagraph: {
    fontSize: 22,
    fontWeight: "bold",
  },
  textInParagraphBlue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#7D90D4",
  },

  sectionImage: {
    flex: 4,
    //backgroundColor: "yellow",
    alignItems: "center",
  },
  instandImage: {
    top: 40,
    width: "80%",
    height: "40%",
    backgroundColor: "pink",
  },

})
