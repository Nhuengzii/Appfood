import { StyleSheet, View, Text, StatusBar } from "react-native";
import React, { useState } from "react"
import { FontAwesome } from "@expo/vector-icons"

export default function SummaryActivityBox({ text, color }) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
    },
    activityWrapper: {
      flex: 1,
      borderRadius: 15,
      backgroundColor: color,
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    activityText: {
      fontSize: 30
    },
    circleWrapper: {
      margin: 10,
      marginLeft: 0,
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.circleWrapper}>
        <FontAwesome name="circle" size={15} color="#636363" />
      </View>
      <View style={styles.activityWrapper}>
        <Text>{text}</Text>
      </View>
    </View>
  )
}


