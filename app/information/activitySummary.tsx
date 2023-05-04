import { StyleSheet, View, Text, FlatList, StatusBar, TouchableOpacity } from "react-native";
import { Checkbox } from "expo-checkbox"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import SummaryActivityBox from "../../components/summaryActivityBox";
import SmileIcon from "../../components/SmileIcon";

//TODO:zindex
const data = [{ id: "1", name: "activity1" }, { id: "2", name: "activity2" }]
export default function ActivitySummary() {

  const [isSelected, setIsSelected] = useState(false);
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
            <SmileIcon colorIn={"#FFFFFF"} colorOut={"#FFD703"} sizeIn={20} sizeOut={25} />
          </LinearGradient>
        </View>
      </View>


      <View style={styles.bottomContainer}>
        <Text style={styles.bottomResultIntroText}>กิจกรรมของ"คุณแจ่มใส"</Text>
        <Text style={styles.bottomResultIntroText}>อยู่ในระดับ</Text>
        <View style={styles.levelResultWrapper}>
          <Text style={styles.levelResultText} > กิจกรรมปานกลาง</Text>
        </View>
        <View style={styles.checkBoxWithText}>
          <Checkbox
            value={isSelected}
            onValueChange={setIsSelected}
            style={{ backgroundColor: "#C6FF9A", margin: 5 }}
          />
          <Text style={styles.checkBoxText}>ต้องการให้ระบบบันทึกกิจกรรมสำหรับวันถัดไป</Text>
        </View>
        <Text style={styles.checkBoxText}>เพื่อคำนวณค่าพลังงานความต้องการเบื้องต้นหรือไม่</Text>

        <View style={styles.nextButtonWrapper}>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>บันทึก</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View >
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
    padding: 10,
    alignItems: "center",
  },
  bottomResultIntroText: {
    fontSize: 20,
    margin: 5
  },
  levelResultWrapper: {
    backgroundColor: "#F9FFB5",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    margin: 20,
  },
  levelResultText: {
    fontSize: 20
  },
  gradient: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center"
  },
  checkBoxWithText: {
    flexDirection: "row",
    alignItems: "center"
  },
  checkBoxText: {
    fontSize: 14
  },
  nextButtonWrapper: {
    flex: 1,
    justifyContent: "center"
  },
  nextButton: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#7ECCED",
    borderRadius: 20
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 25
  }

})
