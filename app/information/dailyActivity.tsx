import { StyleSheet, View, Text, ScrollView, StatusBar } from "react-native"
import DailyActivityBox from "../../components/dailyActivityBox"
import React from "react"


export default function DailyActivity() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar hidden={true} />

        <View style={styles.headerContainer}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>กิจกรรมประจำวัน</Text>
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <DailyActivityBox />
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#FFFBF2",
  },
  headerContainer: {
    backgroundColor: "#F2F500",
    width: "100%",
    flex: 1,
    alignItems: "center",
    padding: 15,
    margin: 20
  },
  headerWrapper: {
    backgroundColor: "#1E807A",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
    borderRadius: 30,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 23,
  },
  bodyContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#F12",
    width: "80%",
    marginVertical: 20,
  }
})
