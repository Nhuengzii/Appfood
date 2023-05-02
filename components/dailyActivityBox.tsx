import { View, Text, TextInput, StyleSheet } from "react-native"
import React, { useState } from "react"

export default function DailyActivityBox() {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.topText}>กิจกรรมที่ทำ</Text>
      <TextInput style={styles.inputBox} />
    </View>
  )
}


const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    margin: 10,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: "#FFC671",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  topText: {
    flex: 1,
    backgroundColor: "#666666",
    fontSize: 16,
    margin: 5,
  },
  inputBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    color: "#F32424",
    marginVertical: 10,
    marginHorizontal: 7,
  }
})
