import { StyleSheet, View, Text, TouchableOpacity, FlatList, ScrollView, StatusBar } from "react-native"
import DailyActivityBox from "../../components/dailyActivityBox"
import React, { useState } from "react"


export default function DailyActivity() {
  const [box, setBox] = useState([
    { name: '', num: 0, id: '1' },
  ]);
  const [count, setCount] = useState(1);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <StatusBar hidden={true} />

        <View style={styles.headerContainer}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>กิจกรรมประจำวัน</Text>
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <FlatList
            style={{ flex: 1, width: "100%" }}
            data={box}
            renderItem={({ item }) => (
              <DailyActivityBox
                onChangeName={(selected: string) => {
                  box[parseInt(item.id) - 1].name = selected;
                  setBox(box);
                }}
                onChangeNum={(selected: number) => {
                  box[parseInt(item.id) - 1].num = selected;
                }}
              />

            )}
            keyExtractor={item => item.id} />

          <TouchableOpacity style={styles.addButton}
            onPress={() => {
              setCount(count + 1);
              box.push({ name: '', num: 0, id: (count + 1).toString() })
              setBox(box);
            }}>
            <Text style={styles.buttonText}>เพิ่ม</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFBF2",
  },
  headerContainer: {
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
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80%",
    marginVertical: 20,
  },
  addButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#7D90F3",
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 30,
    margin: 30
  },
  buttonText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 20
  }
})
