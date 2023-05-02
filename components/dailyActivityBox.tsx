import { View, Text, StyleSheet } from "react-native"
import React, { useState } from "react"

export default function DailyActivityBox() {
  return (
    <View style={styles.boxContainer}>
      <Text>BoxContainer</Text>
      <Text>2</Text>
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
    paddingVertical: 20,
  }
})
