import React, { useState }  from "react";
import { StyleSheet, View, Text, StatusBar ,Image} from "react-native";

const drink_rat = () => {
  const [val_drink, set_drink] = useState(-1);
  const [val_eat, set_eat] = useState(-1);

  if (val_drink==-1 && val_eat==-1) {
    shouldShow = false;
    var bt_nodrink_color = "#FEC2B5";
    var bt_noeat_color = "#FEC2B5";
    var bt_drink1_color = "#E2F8FF";
    var bt_drink2_color = "#E2F8FF";
    var bt_eat_color = "#FDFFA4";
  }
  else{
    shouldShow = true;
    if(val_drink==0){
      bt_nodrink_color="#83FF9E" 
      bt_drink1_color="#CECECE"
      bt_drink2_color="#CECECE"
    }
    else if(val_drink==1){
      bt_nodrink_color="#CECECE"
      bt_drink1_color="#83FF9E" 
      bt_drink2_color="#CECECE"
    }
    else if(val_drink==2){
      bt_nodrink_color="#CECECE"
      bt_drink1_color="#CECECE"
      bt_drink2_color="#83FF9E" 
    }
    if(val_eat==0){
      var bt_noeat_color = "#83FF9E";
      var bt_eat_color = "#CECECE";
    }
    else if(val_eat==1){
      var bt_noeat_color = "#CECECE";
      var bt_eat_color = "#83FF9E";
    }

  }

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
        <View style={[styles.buttom_R,{backgroundColor:bt_nodrink_color}]}><Text style={styles.fontSize} onPress={() => set_drink(0)} >ไม่ดื่ม</Text></View>
        <View style={[styles.buttom_L,{backgroundColor:bt_noeat_color}]}><Text style={styles.fontSize} onPress={() => set_eat(0)} >ไม่ทาน</Text></View>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <View style={[styles.buttom_R,{backgroundColor:bt_drink1_color}]}><Text style={styles.fontSize} onPress={() => set_drink(1)}>1แก้ว</Text></View>
        <View style={[styles.buttom_L,{backgroundColor:bt_eat_color}]}><Text style={styles.fontSize} onPress={() => set_eat(1)}>ทาน</Text></View>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <View style={[styles.buttom_R,{backgroundColor:bt_drink2_color}]}><Text style={styles.fontSize} onPress={() => set_drink(2)}>2แก้ว</Text></View>
        <View style={[styles.buttom_L,{backgroundColor:"#ffffff"}]}><Text style={styles.fontSize}></Text></View>
      </View>
      <View style={{flex:3,alignItems:"center",justifyContent:"center"}}>
      {shouldShow ?
        (
          <View style={[styles.buttom_R,{backgroundColor:"#87E4EA"}]}><Text style={styles.fontSize}>ถัดไป</Text></View>
        ) : null}
      </View>
      
      
      </View>
    </View>
  );
};

export default drink_rat;

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
    width: 114,
    height: 55,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 30,
  },
});



















