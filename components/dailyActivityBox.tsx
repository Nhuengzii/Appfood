import { View, Text, TextInput, StyleSheet } from "react-native"
import React, { useState } from "react"

export default function DailyActivityBox({ onChangeName, onChangeNum }) {
  const [name, setName] = useState("");
  const [num, setNum] = useState("1")
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.topText}>กิจกรรมที่ทำ</Text>
      <TextInput style={styles.inputBox}
        value={name}
        onChangeText={(text) => {
          setName(text)
          onChangeName(text);
        }}
      />
      <View style={styles.bottomTextWrapper}>
        <Text>จำนวน </Text>
        <TextInput style={styles.numberInputBox}
          keyboardType={"number-pad"}
          maxLength={1}
          placeholder={"1"}
          textAlign={"center"}
          value={num}
          onChangeText={(text) => {
            setNum(text)
            onChangeNum(parseInt(text))
          }}
        />
        <Text>ครั้ง/สัปดาห์</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignSelf: "center",
    margin: 10,
    marginVertical: 7,
    borderRadius: 20,
    backgroundColor: "#FFC671",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  topText: {
    flex: 1,
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
    paddingHorizontal: 10,
  },
  bottomTextWrapper: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  numberInputBox: {
    justifyContent: "space-around",
    margin: 5,
    fontSize: 16,
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    color: "#F32424"
  }
})
