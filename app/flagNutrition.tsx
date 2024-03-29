import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import ButtonBack from "../components/ButtonBack";
import React from "react";




export default function FlagNutrition() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.navSection}>
            <View style={styles.containButton}>
              <ButtonBack colorBg={"#C9DDDC"} colorStyle={"black"}></ButtonBack>
            </View>
            <View style={styles.containMenu}>
              <Text style={styles.titleMenu}>เมนู</Text>
            </View>
        </View>
        <View style={styles.header}>          
          <Text style={styles.title}>ธงโภชนาการ</Text>
        </View>
        <View style={styles.sectionPressable}>
          <View style={styles.containFlour}>
            <Pressable onPress={() => router.push("/riceFlour")} style={styles.buttonFlour}>
              <View style={styles.instandImageFlourLeft}></View>
              <Text style={styles.titleFlour}>ข้าว-แป้ง</Text>
              <View style={styles.instandImageFlourLeft}></View>

            </Pressable>
          </View>
          <View style={styles.containVegFruit}>
            <Pressable onPress={() => router.push("/vegFruit")} style={styles.buttonVegFruitLeft}>
              <Text style={styles.titleVeg}>ผัก</Text>
              <View style={styles.instandImageVeg}></View>
            </Pressable>
            <Pressable onPress={() => router.push("/vegFruit")} style={styles.buttonVegFruitRight}>
              <View style={styles.instandImageFruit}></View>
              <Text style={styles.titleFruit}>ผลไม้</Text>
            </Pressable>
          </View>
          <View style={styles.containMilkMeat}>
            <Pressable onPress={() => router.push("/meatMilk")} style={styles.buttonMilkLeft}>
              <View style={styles.instandImage}></View>
              <Text style={styles.subTitle}>กลุ่มนม</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/meatMilk")} style={styles.buttonMilkRight}>
              <View style={styles.instandImage}></View>
              <Text style={styles.subTitle}>เนื้อสัตว์</Text>
            </Pressable>
          </View>
          <View style={styles.containOil}>
            <Pressable onPress={() => router.push("/oil")} style={styles.buttonOil}>
              <View style={styles.instandImageOil}></View>
              <Text>น้ำมัน</Text>
              <Text>เครื่องปรุง</Text>
            </Pressable>
          </View>
          <View style={styles.sectionWater}>
            <View style={styles.containWaterTitle}>
              <Text style={styles.title24}>น้ำ</Text>
            </View>

            <View style={styles.containWaterSugest}>
              <Text style={styles.title24}>ควรดื่มน้ำวันละ</Text>
              <Text style={styles.title24}>8 แก้ว</Text>
            </View>
            <View style={styles.instandImageWater}></View>
          </View>
        </View>
      </ScrollView>
    </View>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A4083",
    flexDirection: "column",
  },
  header: {
    //backgroundColor: "#fff",
    height: 100,
    //borderWidth: 5,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  navSection: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    bottom: 0,
    right: 0,
    height: 150,
    backgroundColor: "#4A4083",
  },
  containMenu: {
    backgroundColor: "#7D90F3",
    width: 80,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 60,
    left: "22%",
    borderRadius: 30,
  },
  titleMenu: {
    fontSize: 18,
    fontWeight: "bold",
  },
  containButton: {
    position: "absolute",
    left: 20,
    top: 52,
  },
  sectionPressable: {
    height: 1000,
    alignItems: "center",
    //backgroundColor: "pink",
  },
  containFlour: {
    flex: 1 / 10,
    //backgroundColor: "red",
    padding: 0,
    margin: 0,

  },
  buttonFlour: {
    backgroundColor: "#EED7AB",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 0,
    padding: 0,
    width: 350,
    height: 100,
    //left: 30,
    borderWidth: 7,
    borderColor: "#fff",
  },
  titleFlour: {
    fontSize: 20,
    fontWeight: "bold",
  },
  instandImageFlourLeft: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    margin: 20,
  },
  instandImageFlourRight: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    margin: 5,
  },

  instandImage: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    margin: 5,
  },
  containVegFruit: {
    flex: 1 / 9,
    //backgroundColor: "blue",
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    padding: 0,
  },
  buttonVegFruitLeft: {
    backgroundColor: "#C3F18E",
    alignItems: "center",
    margin: 2,
    height: 100,
    width: 160,
    borderWidth: 7,
    borderColor: "#fff",
    flexDirection: "row",
    //left: 40,
  },
  buttonVegFruitRight: {
    backgroundColor: "#C2B3F4",
    alignItems: "center",
    margin: 2,
    height: 100,
    width: 160,
    borderWidth: 7,
    borderColor: "#fff",
    flexDirection: "row",
    //left: 40,
  },
  instandImageVeg: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "white",
    left: 80,
  },
  titleVeg: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    left: 40,
    color: "#fff",
  },
  instandImageFruit: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "white",
    left: 10,
  },
  titleFruit: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    left: 70,
    color: "#fff",
  },
  containMilkMeat: {
    flex: 1 / 9,
    padding: 0,
    height: 100,
    //backgroundColor: "green",
    flexDirection: "row",
  },
  buttonMilkLeft: {
    backgroundColor: "#AFD8F7",
    alignItems: "center",
    margin: 2,
    height: 100,
    width: 140,
    borderWidth: 7,
    borderColor: "#fff",
    flexDirection: "column",
    //left: 60,
    position: "relative",
  },
  buttonMilkRight: {
    backgroundColor: "#DFAAB1",
    alignItems: "center",
    margin: 2,
    height: 100,
    width: 140,
    borderWidth: 7,
    borderColor: "#fff",
    flexDirection: "column",
    //left: 60,
    position: "relative",
  },
  containOil: {
    flex: 1 / 8,
    height: 100,
    //backgroundColor: "yellow",
  },
  buttonOil: {
    backgroundColor: "#FCF6EA",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    height: 120,
    width: 140,
    borderWidth: 7,
    borderColor: "#fff",
    flexDirection: "column",
    //left: 130,
    position: "relative",
  },
  instandImageOil: {
    //position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "white",

  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    //position: "absolute",
    top: "-40%",
    //left: "35%",

  },
  subTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  sectionWater: {
    flex: 0.55,
    //backgroundColor: "#fff",
    alignItems: "center",
    position: "relative",
  },
  instandImageWater: {
    position: "absolute",
    backgroundColor: "red",
    width: "80%",
    height: 200,
    top: 270,
  },
  containWaterSugest: {
    position: "absolute",
    width: "80%",
    height: 120,
    top: 120,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderStyle: "dashed",
    borderColor: "#899BDC",

  },
  containWaterTitle: {
    position: "absolute",
    top: 30,
    width: "40%",
    height: "12.5%",
    backgroundColor: "#C8EAF1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  title24: {
    fontSize: 24,
    fontWeight: "bold",
  }
});
