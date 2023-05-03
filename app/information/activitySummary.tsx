import { StyleSheet, View, Text, FlatList, StatusBar, Icon } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import SummaryActivityBox from "../../components/summaryActivityBox";
import { Octicons, FontAwesome } from "@expo/vector-icons"

//TODO:zindex
const data = [{ id: "1", name: "activity1" }, { id: "2", name: "activity2" }]
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
          <Text style={styles.activitiesHeaderText}>กิจกรรมที่ทำ</Text>

          <FlatList style={styles.activitiesListContainer}
            data={data}
            renderItem={({ item }) => {
              if (parseInt(item.id) % 2 == 0) {
                return (
                  <SummaryActivityBox text={item.name} color={"#DCFFD9"} />
                )
              }
              else {
                return (
                  <SummaryActivityBox text={item.name} color={"#BAEBC8"} />
                )
              }
            }}

          />
        </View>

        <View style={styles.smileBar}>
          <LinearGradient
            colors={['#FF3434', '#EEF07C', '#8FFBAD']}
            style={styles.gradient}
          >
            <FontAwesome name="circle" size={30} color="#FFD703">
              <Octicons name="smiley" size={24} color="black" />
            </FontAwesome>
          </LinearGradient>
        </View>
      </View>


      <View style={styles.bottomContainer}>
        <Text style={styles.bottomResultIntroText}>กิจกรรมของ"คุณแจ่มใส"</Text>
        <Text style={styles.bottomResultIntroText}>อยู่ในระดับ</Text>
        <View style={styles.levelResultWrapper}>
          <Text> กิจกรรมระดับปานกลาง</Text>
        </View>
        <View>

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
    paddingHorizontal: 40,
    borderRadius: 30,
    justifyContent: "center"
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 25,
  },
  twoChildContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activities: {
    flex: 2,
    alignItems: "flex-start",
    marginHorizontal: 30,
    margin: 10,
  },
  smileBar: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  activitiesHeaderText: {
    fontSize: 20,
    marginVertical: 10,
  },
  activitiesListContainer: {
    flex: 9,
    width: "100%",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#F5F",
    padding: 10,
    alignItems: "center",
  },
  bottomResultIntroText: {
    fontSize: 15,
    margin: 5
  },
  levelResultWrapper: {
    backgroundColor: "#F9FFB5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 20,
  },
  gradient: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center"
  }

})
