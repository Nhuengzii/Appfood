import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native"

import { useState } from "react"
import Dropdown from "./dropdown"

export default function InsertPersonalInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.oneChildContainer}>
        <Text style={styles.textAboveInput}>ชื่อ-นามสกุล</Text>
        <TextInput style={styles.inputBox} />
      </View>

      <View style={styles.twoChildContainer}>
        <View style={styles.halfRowContainer}>
          <Text style={styles.textAboveInput}>เพศ</Text>
          <TextInput style={styles.inputBox} />
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.halfRowContainer}>
          <Text style={styles.textAboveInput}>อายุ</Text>
          <TextInput style={styles.inputBox} />
        </View>
      </View>

      <View style={styles.twoChildContainer}>
        <View style={styles.halfRowContainer}>
          <Text style={styles.textAboveInput}>น้ำหนัก</Text>
          <TextInput style={styles.inputBox} />
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.halfRowContainer}>
          <Text style={styles.textAboveInput}>ส่วนสูง</Text>
          <TextInput style={styles.inputBox} />
        </View>
      </View>

      <View>
        <Dropdown label={"Select Item"} />
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 2,
    backgroundColor: "#F8FFDD",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  oneChildContainer: {
    width: "90%",
    flex: 1,
    alignItems: "stretch",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  twoChildContainer: {
    width: "90%",
    flex: 1,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  halfRowContainer: {
    flex: 1.3,
    marginRight: 40
  },
  textAboveInput: {
    fontSize: 23,
    margin: 5,
  },
  inputBox: {
    backgroundColor: "#FFFFFF",
    height: 35,
    borderRadius: 10,
    margin: 5,
    fontSize: 16
  },
})
