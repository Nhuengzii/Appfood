import { StyleSheet, View, Text, StatusBar } from "react-native";
import React, { useState } from "react"


export default function ActivitySummary() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.headerContainer}>

        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>สรุปกิจกรรมประจำวัน</Text>
        </View>
      </View>

      <View style={styles.twoChildContainer}>
        <View style={styles.activities}>
          <Text>activities</Text>
        </View>

        <View style={styles.smileBar}>
          <Text>smilebar</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  headerContainer: {
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    margin: 20
  },
  headerWrapper: {
    backgroundColor: "#1E807A",
    padding: 20,
    borderRadius: 25,
    justifyContent: "center"
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  twoChildContainer: {
    flex: 5,
    flexDirection: "row",
    backgroundColor: "#FA0",
    justifyContent: "space-between"
  },
  activities: {
    flex: 3.5,
    backgroundColor: "#4F2",
    alignItems: "center",
  },
  smileBar: {
    flex: 1,

  }
})
