import { Text, View, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import ButtonBack from "../components/ButtonBack";
import React from "react";
//import ButtonVeg from "../components/ButtonVeg";




export default function VegFruit() {
  const router = useRouter();

  const ButtonVegA = () => (
    <Pressable onPress={() => router.push("/VegTypeA")} style={styles.buttonA}>
      <View style={styles.buttonLayerOutA}></View>
      <View style={styles.buttonLayerInA}>
        <Text style={styles.textButtonA}>ผัก ก</Text>
      </View>
    </Pressable>
  );

  const ButtonVegB = () => (
    <Pressable onPress={() => router.push("/VegTypeB")} style={styles.buttonB}>
      <View style={styles.buttonLayerOutB}></View>
      <View style={styles.buttonLayerInB}>
        <Text style={styles.textButtonA}>ผัก ข</Text>
      </View>
    </Pressable>
  );



  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.containButton}>
            <ButtonBack colorBg={"#8297DF"} colorStyle={"white"}></ButtonBack>
          </View>
          <View style={styles.containTitle}>
            <Text style={styles.title}>ผักและผลไม้</Text>
          </View>
        </View>
        <View style={styles.mainContain}>
          <View style={styles.sectionDetail}>
            <View style={styles.containDetail}>
              <View style={styles.containTitleVeg}>
                <Text style={styles.titleDetail}>ผัก</Text>
              </View>
              <View style={styles.containAmountVeg}>
                <Text style={styles.titleDetailGreen1}>วันละ 3 ทัพพี</Text>
              </View>
              <View style={styles.containTitleFruit}>
                <Text style={styles.titleDetailOrange}>ผลไม้</Text>
              </View>
              <View style={styles.containAmountFruit}>
                <Text style={styles.titleDetailPink}>2-4 ส่วน</Text>
              </View>
              <View style={styles.containTextSugestFruitVeg}>
                <Text style={styles.titleDetail}>รับประทานปริมาณรองลง</Text>
                <Text style={styles.titleDetail}>มาเพื่อให้ได้รับ<Text style={styles.titleDetailGreen2}>วิตามิน</Text></Text>
                <Text style={styles.titleDetailGreen2}>แร่ธาตุ และใยอาหาร</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionTypeVeg}>
            <View style={styles.containTitleSugest}>
              <Text style={styles.subTitle}>ผักจัดแบ่งเป็น 2 ประเภท</Text>
              <Text style={styles.subTitle}>ที่ให้พลังงานแตกต่างกัน</Text>
            </View>
            <View style={styles.containButtonVeg}>
              <ButtonVegA></ButtonVegA>
              <ButtonVegB></ButtonVegB>

            </View>
            <View style={styles.containinstandImg}>
              <View style={styles.instandImgLeft}></View>
              <View style={styles.instandImgRight}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FCF1",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    height: "12%",
    backgroundColor: "#F7FCF1",
    position: "relative",
  },
  containTitle: {
    width: "50%",
    height: "36%",
    backgroundColor: "#C3F18E",
    position: "absolute",
    top: "50%",
    left: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 33,
  },
  containButton: {
    position: "absolute",
    top: "30%",
    left: "6%",
  },
  mainContain: {
    width: "100%",
    height: 1400,
    //backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionDetail: {
    flex: 1.5,
    //backgroundColor: "green",
    width: "100%",
    //justifyContent: "center",
    alignItems: "center",
  },
  containDetail: {
    height: "80%",
    width: "84%",
    //height: "100%",
    top: "5%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#C3F18E",
    borderStyle: "dashed",
  },
  sectionTypeVeg: {
    flex: 2,
    //backgroundColor: "blue",
    width: "100%",
    alignItems: "center",
  },
  containTitleVeg: {
    //backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    top: "8%",
    //width: "40%",
  },
  titleDetail: {
    fontSize: 22,
    fontWeight: "bold",
  },
  containAmountVeg: {
    alignItems: "center",
    justifyContent: "center",
    top: "15%",
  },
  containTitleFruit: {
    top: "22%",
    alignItems: "center",
    justifyContent: "center",
  },
  containAmountFruit: {
    top: "28%",
    alignItems: "center",
    justifyContent: "center",
  },
  containTextSugestFruitVeg: {
    top: "36%",
    alignItems: "center",
    justifyContent: "center",
  },
  containTitleSugest: {
    top: "-8%",
    alignItems: "center",
    //backgroundColor: "yellow",
    justifyContent: "center",
    width: "80%",
    height: "20%",
  },
  containButtonVeg: {
    top: "-5%",
    width: "100%",
    height: "30%",
    //backgroundColor: "pink",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonA: {
    top: "-20%",
    width: "50%",
    height: "60%",
    //backgroundColor: "green",
    position: "relative",
  },
  buttonB: {
    top: "-20%",
    width: "50%",
    height: "60%",
    //backgroundColor: "red",
    position: "relative",
  },
  buttonLayerOutA: {
    position: "absolute",
    left: "30%",
    top: "10%",
    width: "60%",
    height: "64%",
    backgroundColor: "#8DCA93",
    borderRadius: 30,
  },
  buttonLayerInA: {
    position: "absolute",
    left: "25%",
    top: "16%",
    width: "60%",
    height: "60%",
    backgroundColor: "#B0F3B7",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLayerOutB: {
    position: "absolute",
    left: "18%",
    top: "10%",
    width: "60%",
    height: "64%",
    backgroundColor: "#D8D294",
    borderRadius: 30,
  },
  buttonLayerInB: {
    position: "absolute",
    left: "13%",
    top: "16%",
    width: "60%",
    height: "60%",
    backgroundColor: "#F5EFB2",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonA: {
    top: "-8%",
    fontSize: 22,
    fontWeight: "bold",
  },
  containinstandImg: {
    top: "-20%",
    width: "100%",
    height: "30%",
    //backgroundColor: "yellow",
    position: "relative",
    flexDirection: "row",
  },
  instandImgLeft: {
    width: "30%",
    height: "60%",
    top: "5%",
    left: "32.5%",
    backgroundColor: "red",
  },
  instandImgRight: {
    top: "5%",
    width: "30%",
    height: "60%",
    left: "38.5%",
    backgroundColor: "green",
  },
  titleDetailGreen1: {
    color: "#447E62",
    fontSize: 22,
    fontWeight: "bold",
  },

  titleDetailOrange: {
    color: "#FF5E54",
    fontSize: 22,
    fontWeight: "bold",
  },
  titleDetailPink: {
    color: "#FD61AC",
    fontSize: 22,
    fontWeight: "bold",
  },
  titleDetailGreen2: {
    color: "#15A03C",
    fontSize: 22,
    fontWeight: "bold",
  },





});
