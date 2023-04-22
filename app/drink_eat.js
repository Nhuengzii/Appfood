import React from "react";
import { StyleSheet, View, Text, StatusBar ,Image} from "react-native";

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <StatusBar hidden={true} />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.title_text}>
          <Text style={styles.title_text.sizetext}>
            คุณดื่มนมหรือรับประทาน
          </Text>
          <Text style={styles.title_text.sizetext}>ผลิตภัณฑ์ที่มีนมหรือไม่?</Text>
        </View>
      </View>
      <View style={{ flex: 1 ,marginTop:10}}>
        <View style={{ flex:1,flexDirection: "row",alignItems:"center",justifyContent:"center"}}>
          <View style={styles.back_img}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/images/drink_eat/drink.png")
              }
            />
          </View>
          <View style={styles.back_img}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/images/drink_eat/eat.png")
            }
            />
          </View>
        </View>
      </View>

      <View style={{ flex: 3 ,marginTop:10}} >
      <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <View style={[styles.buttom_R,{backgroundColor:"#FEC2B5"}]}><Text style={styles.fontSize}>ไม่ดื่ม</Text></View>
        <View style={[styles.buttom_L,{backgroundColor:"#FEC2B5"}]}><Text style={styles.fontSize}>ไม่ทาน</Text></View>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <View style={[styles.buttom_R,{backgroundColor:"#E2F8FF"}]}><Text style={styles.fontSize}>1แก้ว</Text></View>
        <View style={[styles.buttom_L,{backgroundColor:"#FDFFA4"}]}><Text style={styles.fontSize}>ทาน</Text></View>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <View style={[styles.buttom_R,{backgroundColor:"#E2F8FF"}]}><Text style={styles.fontSize}>ไม่ดื่ม</Text></View>
        <View style={[styles.buttom_L,{backgroundColor:"#ffffff"}]}><Text style={styles.fontSize}></Text></View>
      </View>
      <View style={{flex:3,alignItems:"center",justifyContent:"center"}}>
      <View style={[styles.buttom_R,{backgroundColor:"#87E4EA"}]}><Text style={styles.fontSize}>ถัดไป</Text></View>
      </View>
      
      
      </View>
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title_text: {
    backgroundColor: "#DFE6FF",
    width: "90%",
    height: 100,
    marginTop: 50,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    sizetext: {
      fontSize: 24,
      fontWeight: "bold",
      marginRight: 20,
      marginLeft: 20,
      alignItems: "center",
      color: "#6A698D",
    },
  },
  tinyLogo: {
    width: 120,
    height: 120,
    borderRadius: 120,
  },
  back_img: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    margin : 10,
  },
  buttom_L:{
    height: 55,
    width: 114,
    marginLeft: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  buttom_R:{
    height: 55,
    width: 114,
    marginRight: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  fontSize: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
/*
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.title_text}>
        <Text style={styles.title_text.sizetext}>
          คุณดื่มนมหรือรับประทานผลิต
        </Text>
        <Text style={styles.title_text.sizetext}> 
          ภัณฑ์ที่มีนมหรือไม่?
        </Text>
      </View>

      <View style={{flexDirection:"row"}}>
        <View style={styles.back_img}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={styles.back_img}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
      </View>
      <View styles={{ flex: 1 }}>
        <View style={{backgroundColor:"red"}}>
          <Text>ไม่ดื่ม</Text>
          <Text>ไม่ทาน</Text>
        </View>
        <View style={{backgroundColor:"red"}}>
          <Text>ไม่ดื่ม</Text>
          <Text>ไม่ทาน</Text>
        </View>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##FFFBF2",
    alignItems: "center",

  },
  title_text: {
    backgroundColor: "#DFE6FF",
    width: "90%",
    height: 100,
    marginTop: 50,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    sizetext: {
      fontSize: 24,
      fontWeight: "bold",
      marginRight: 20,
      marginLeft: 20,
      alignItems:"center",
      color:"#6A698D"

    },
  },
  tinyLogo: {
    width: 120,
    height: 120,
    borderRadius: 120,
  },
  back_img:{
    width: 150,
    height: 150,
    backgroundColor:"red",
    alignItems:"center",
    justifyContent:"center",
    marginTop: 20,  }
});


*/
