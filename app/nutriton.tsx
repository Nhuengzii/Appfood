import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
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
        <Button
          style={styles.button}
          title="back"
          color="#841584"
          accessibilityLabel="Go back index"
          onPress={() => router.back()}
        />

        <Button
          style={styles.button}
          title="บันทึก"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
    backgroundColor: "red",
    padding: 5,
    paddingTop: 5,
    paddingBottom: 10,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
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
    backgroundColor: "green",
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
    backgroundColor: "orange",
    alignItems: "center",
    padding: 50,
    marginBottom: 20,
  },
  cotainTitle: {
    position: "absolute",
    width: "80%",
    backgroundColor: "pink",
    top: 40,
    height: 75,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    justifyContent: "center",

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
  },
});
