
import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'

export default function PersonalInfo({ route }) {//รับค่าจากเซิฟเวอร์

  var value_BMI = route.params.BMI || 'white'
  var value_name = route.params.name
  if (value_BMI < 18.5) {//ต่ำกว่าเกณฑ์
    var set_colorbg = '#FFF5DC'
    var set_colortx = '#FFD057'
    var text_BMI = "< 18.5 ต่ำกว่าเกณฑ์"
  }
  else if (value_BMI >= 18.5 && value_BMI <= 22.9) {//ปกติ
    var set_colorbg = '#D9FFC8'
    var set_colortx = '#62E923'
    var text_BMI = "18.5-22.9 ปกติ"
  }
  else if (value_BMI >= 23 && value_BMI <= 24.9) {
    var set_colorbg = '#FFF5DC'
    var set_colortx = '#FFD057'
    var text_BMI = "23-24.9 น้ำหนักเกิน"

  }
  else if (value_BMI >= 25 && value_BMI <= 29.9) {
    var set_colorbg = '#FFD0C1'
    var set_colortx = '#FF9457'
    var text_BMI = "25-29.9 โรคอ้วน"

  }
  else if (value_BMI >= 30) {
    var set_colorbg = '#FFAFAF'
    var set_colortx = '#FF3B3B'
    var text_BMI = ">=30 โรคอ้วน"
  }



  return (
    <ScrollView style={{ backgroundColor: set_colorbg }}>
      <View style={{ flex: 1, marginLeft: 30, marginRight: 30 }}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: 'flex-start', marginTop: 30, marginVertical: 20 }}>
          <View style={{ flex: 1, backgroundColor: "#B1DEFF", width: 150, height: 150, justifyContent: "center", alignItems: "center", borderRadius: 150 }}>




          </View>
          <View style={{ flex: 1, marginTop: 55, marginLeft: 15 }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>"{value_name}"</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center", marginTop: 15, marginVertical: 15 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>ค่าดัชนีมวลกาย</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", marginVertical: 20 }}>
        <Text style={{ fontWeight: 'bold', marginTop: 15, marginVertical: 15, fontSize: 17 }}>น้ำหนักของคุณอยู่ในเกณฑ์</Text>
        <View style={{ backgroundColor: set_colortx, width: 204, height: 54, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>{text_BMI}</Text>
        </View>
        <Image source={{}} />
      </View>
      <View style={{ flex: 1, backgroundColor: "#F9FFE2", marginLeft: 10, marginRight: 10, borderRadius: 10, alignItems: "center" }}>
        <View style={{ alignItems: "center", flexDirection: "row", marginTop: 20 }}>
          <View style={{ backgroundColor: "#FFD057", marginRight: 5 }}>
            <Text>{'<'} 18.5 ต่ำกว่าเกณฑ์</Text>
          </View >
          <View style={{ backgroundColor: "#FFD057" }}>
            <Text>23 - 24.9 น้ำหนักเกิน</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", flexDirection: "row", marginTop: 10 }}>
          <View style={{ backgroundColor: "#62E923", marginRight: 5 }}>
            <Text>18.5 - 22.9 ปกติ</Text>
          </View>
          <View style={{ backgroundColor: "#FF9457" }}>
            <Text>25 - 29.9 โรคอ้วน</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end", marginRight: 30, marginTop: 10, marginVertical: 20 }}>
          <View style={{ backgroundColor: "#FF3B3B" }}>
            <Text>{">="} 30 โรคอ้วน</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 130, backgroundColor: "#ED7E92", width: 138, height: 56 }}>
            <Text style={{ color: "white", fontSize: 18 }}>ถัดไป</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 115,
    height: 115,
    resizeMode: 'stretch',
  },
}); //<Image style={[styles.stretch]}  source={require('./assets/splash.png')}/>
