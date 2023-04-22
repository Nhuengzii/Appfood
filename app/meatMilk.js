import { Text, Button, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import ButtonBack from "../components/ButtonBack";


export default function VegFruit() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containButton}>
                        <ButtonBack colorBg={"#8297DF"}></ButtonBack>
                    </View>
                </View>
                <View style={styles.mainContain}>
                    <View style={styles.sectionMeat}>
                        <View style={styles.containTitle}>
                            <Text style={styles.title}>เนื้อสัตว์</Text>
                        </View>
                        <View style={styles.containDetail}>
                            <Text style={styles.textDetail}>เนื้อสัตว์วันละ</Text>
                            <Text style={styles.textDetail}>6-10 ช้อนโต๊ะ</Text>
                        </View>
                        <View style={styles.instandImgMeat}></View>
                    </View>
                    <View style={styles.sectionMilk}>
                        <View style={styles.containTitleMilk}>
                            <Text style={styles.title}>นมหรือผลิตภัณฑ์</Text>
                            <Text style={styles.title}>จากนม</Text>
                        </View>
                        <View style={styles.milk}>
                            <Text style={styles.titleMilk}>นม</Text>
                            <Text style={styles.titleMilkPurple}>วันละ 1-2 แก้ว</Text>
                        </View>

                        <View style={styles.productMilk}>
                            <Text style={styles.titleMilk}>หรือผลิตภัณฑ์จากนม</Text>
                            <Text style={styles.titleMilkPurple}>เช่น โยเกิร์ต นมเปรี้ยว ชีส</Text>
                        </View>

                        <View style={styles.instandImgProductMilk}></View>
                    </View>
                    <View style={styles.sectionBean}>
                        <View style={styles.containTitleBean}>
                            <Text style={styles.title}>ถั่ว</Text>
                        </View>
                        <Text style={styles.textAmountBean}>1 ส่วน</Text>
                        <View style={styles.instandImgBean}></View>
                        <View style={styles.containInformation}>
                            <Text style={styles.titleInformation}>รับประทานในปริมาณพอ</Text>
                            <Text style={styles.titleInformation}>เหมาะเพื่อให้ได้รับ<Text style={styles.titleInformationRed}>โปรตีน</Text></Text>
                            <Text style={styles.titleInformationRed}>เหล็ก และแคลเซียม</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF4FD",
        flexDirection: "column",
    },
    header: {
        width: "100%",
        height: "5%",
        position: "relative",
        //backgroundColor: "yellow",
    },
    containButton: {
        position: "absolute",
        top: "70%",
        left: "6%",
    },
    mainContain: {
        width: "100%",
        height: 1750,
        //backgroundColor: "pink",
    },
    sectionMeat: {
        flex: 0.55,
        height: "100%",
        //backgroundColor: "red",
        alignItems: "center",
        position: "relative",
    },
    containTitle: {
        height: "14.5%",
        width: "38%",
        borderRadius: 20,
        backgroundColor: "pink",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    containDetail: {
        width: "42%",
        height: "20%",
        position: "absolute",
        top: "22%",
        //backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    textDetail: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#E75151"
    },
    instandImgMeat: {
        position: "absolute",
        top: "50%",
        width: "70%",
        height: "40%",
        backgroundColor: "blue",
    },
    sectionMilk: {
        flex: 0.95,
        //backgroundColor: "blue",
        alignItems: "center",
    },
    containTitleMilk: {
        height: "14%",
        width: "60%",
        borderRadius: 20,
        backgroundColor: "#EBC1FF",
        position: "absolute",
        top: "5%",
        justifyContent: "center",
        alignItems: "center",
    },
    milk: {
        width: "60%",
        height: "10%",
        //backgroundColor: "yellow",
        top: "25%",
        alignItems: "center",
        justifyContent: "center",
    },
    productMilk: {
        width: "70%",
        height: "20%",
        //backgroundColor: "white",
        top: "30%",
        justifyContent:"space-evenly",
        alignItems: "center",
    },
    titleMilk: {
        fontSize: 22,
        fontWeight: "bold",
    },
    titleMilkPurple: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#504EAF",
    },
    instandImgProductMilk: {
        position: "absolute",
        top: "64%",
        width: "70%",
        height: "28%",
        backgroundColor: "green",
    },
    sectionBean: {
        flex: 1.1,
        //backgroundColor: "green",
        alignItems: "center",
        position: "relative",
    },
    containTitleBean: {
        justifyContent: "center",
        alignItems: "center",
        height: "8%",
        width: "24%",
        borderRadius: 20,
        backgroundColor: "#EBC1FF",
        position: "absolute",
        top: "1%",
    },
    textAmountBean: {
        fontSize: 22,
        fontWeight: "bold",
        top: "12%",

    },
    instandImgBean: {
        position: "absolute",
        top: "20%",
        width: "70%",
        height: "22%",
        backgroundColor: "red",
    },
    containInformation: {
        width: "80%",
        height: "24%",
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        top: "40%",
        borderRadius: 20,
        borderStyle: "dashed",
        borderWidth: 5,
        borderColor: "#D04B8B",
        fontSize: 22,
        fontWeight: "bold",
    },
    titleInformationRed: {
        fontSize: 22,
        fontWeight: "bold",
        color: "red",
    },
    titleInformation: {
        fontSize: 22,
        fontWeight: "bold",
    },
});