import { StyleSheet, Text, View, ScrollView, Button, Pressable } from "react-native";
import ShowElement from "../components/ShowElement";
import { useRouter } from "expo-router";

import React, { useEffect } from 'react';
import { LogBox } from 'react-native';



const calWant = 1400;
const backgroundColorPage = "#fff";

export default function nutrition() {

  const router = useRouter();
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.cotainTitle}>
          <Text style={styles.title}>ข้อมูลทางโภชนาการ</Text>
        </View>

        <Text style={styles.titleCal}>พลังงานที่ต้องการต่อวัน</Text>
        <View style={styles.containValueCal}>
          <Text style={styles.cal}> {calWant} Kcal </Text>
        </View>
      </View>

      <View style={styles.main}>
        <ShowElement></ShowElement>
      </View>

      <View style={styles.flooter}>
        <Pressable onPress={() => router.back()} style={{
              width: '50%',
              height: 70,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              backgroundColor: "#7ECCED",
              top: -30,
              
          }}>
            <Text style={styles.titleButton}>บันทึก</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: backgroundColorPage,
    flexDirection: "column",

  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    padding: 5,
    paddingTop: 5,
    paddingBottom: 10,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 210,
    position: "relative",
  },

  blockHeader: {
    width: "78%",
    height: "180%",
    backgroundColor: "#889EEE",
    color: "white",
    position: "absolute",
    left: "12%",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  section: {
    flex: 1,
    borderColor: "#000",
    borderWidth: 4,
    borderRadius: 30,
    marginBottom: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  flooter: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    marginBottom: 20,
  },
  cotainTitle: {
    position: "absolute",
    width: "80%",
    backgroundColor: "#889EEE",
    top: 40,
    height: 75,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",


  },

  titleButton: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  titleCal: {
    fontSize: 20,
    position: "absolute",
    color: "#000",
    paddingTop: 0,
    marginTop: 30,
    top: 90,
    left: 10,
  },
  containCal: {
    backgroundColor: "#fff",
    position: "absolute",
    padding: 0,
    top: 120,
  },
  cal: {
    fontSize: 26,
    //position: "absolute",
    //backgroundColor: "#fff",
  },

  containValueCal: {
    position: "absolute",
    backgroundColor: "#D1FF96",
    top: 150,
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  Bigtitle: {
    fontSize: 96,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  paragrah: {
    fontSize: 16,
    color: "#fff",
  },
  button: {
    fontSize: 24,
    borderRadius: 30,
    marginBottom: 10,
    padding: 30,
  },
});
