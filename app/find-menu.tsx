import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { AntDesign,FontAwesome,Entypo } from '@expo/vector-icons'; 
import { useRouter } from "expo-router";
import React from "react";


export default function FindMenu() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>

        <Pressable style={styles.containButtonMenu} onPress={() => router.back()}>
          <Text style={styles.textButtonMenu}>กลับสู่เมนูหลัก</Text>
        </Pressable>

        <View style={styles.containSearchBox}>
          <Text style={styles.textSearchBox}>พิมพ์ชื่ออาหารตรงนี้สิ</Text>
          <FontAwesome style={styles.iconSearch}  name="search" size={24} color="rgba(0, 0, 0, .51)" />
        </View>

      </View>

      <View style={styles.sectionMain}>

        <View style={styles.containMainFruit}>
          <Pressable style={styles.boxInSide}>
            <View style={styles.boxTitleGreen}>
              <Text style={styles.textInBox}>ผลไม้</Text>
            </View>
            <View>
              <Image style={styles.image}></Image>
            </View>
          </Pressable>
        </View>

        <View style={styles.containMainFlour}>
          <Pressable style={styles.boxInSide}>
            <View style={styles.boxTitleBrown}>
              <Text style={styles.textInBox}>ข้าว-แป้ง</Text>
            </View>
            <View>
              <Image style={styles.image}></Image>
            </View>
          </Pressable>
        </View>

      </View>

      <View style={styles.sectionFooter}>
        <View style={styles.containIconCamera}>
          <Entypo style={styles.iconCamera} name="camera" size={54} color="white" onPress={() => router.push("/camera")}/>
        </View>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAFFF1",
  },
  sectionHeader: {
    flex: 1/5,
    //backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
  containButtonMenu: {
    backgroundColor: "#5B9E82",
    width: "50%",
    height: "28%",
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: "-12%",
    top: "10%",
  },
  textButtonMenu: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  containSearchBox: {
    backgroundColor: "#fff",
    width: "80%",
    height: "30%",
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    top: "4%",
  },
  textSearchBox: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, .51)",
    left: "-90%",
  },
  iconSearch: {
    left: "90%",
  },
  sectionMain: {
    flex: 3/5,
    //backgroundColor: "blue",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containMainFruit: {
    backgroundColor: "#78E897",
    flex: 3/7,
    height: "35%",
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containMainFlour: {
    backgroundColor: "#F3DEB3",
    flex: 3/7,
    height: "35%",
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxInSide: {

    backgroundColor: "#fff",
    width: "90%",
    height: "85%",
    borderRadius: 40,
    alignItems: 'center',
    
  },
  
  boxTitleGreen: {
    backgroundColor: "#A7DEBD",
    width: "80%",
    height: "25%",
    alignItems: 'center',
    top: "10%",
    justifyContent: 'center',
    borderRadius: 40,
  },
  boxTitleBrown: {
    backgroundColor: "#F3DEB3",
    width: "80%",
    height: "25%",
    alignItems: 'center',
    top: "10%",
    justifyContent: 'center',
    borderRadius: 40,
  },
  image: {
    width: "80%",
    height: "60%",
    top: "15%",
    backgroundColor: "red",
  },
  textInBox: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionFooter: {
    flex: 1/5,
    //backgroundColor: "green",
    alignItems: 'center',
    justifyContent: 'center',
  },

  containIconCamera: {
    backgroundColor: "#FF783F",
    width: 90,
    height: 90,
    position:'relative',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCamera: {
    position: 'absolute',
    //alignSelf: 'center',
    width: 100,
    height: 100,
    top: 14,
    left: 18,
  },

});
