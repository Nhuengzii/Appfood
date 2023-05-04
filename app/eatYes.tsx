import { Text, View, StyleSheet, Pressable, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import ButtonBack from "../components/ButtonBack";
import { FontAwesome5 } from '@expo/vector-icons'; 
import React from "react";
import SmileIcon from "../components/SmileIcon";


export default function Oil() {
    const router = useRouter();
    return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
                <View style={styles.containButton}>
                    <ButtonBack colorBg={"#563D33"} colorStyle={"white"}></ButtonBack>
                </View>
                <View style={styles.headerRight}>
                    <SmileIcon colorIn={"rgba(3, 219, 24, 0.65);"} colorOut={"white"} sizeIn={51} sizeOut={60}></SmileIcon>
                    <View style={styles.boxIndexSugar}>
                        <Text style={styles.textIndexSugar}>ดัชนีน้ำตาล {'<'} 55</Text>
                    </View>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.titleContain}>
                    <Text style={styles.title}>แอปเปิ้ลแดงฟูจิ</Text>
                </View>
                <View style={styles.containImageOut}>
                    <View style={styles.containImageIn}>
                        {/* image */}
                    </View>
                </View>
                <Text style={styles.textNutrition}>ข้อมูลโภชนาการ</Text>
                <View style={styles.containDetail}>
                    <Text style={styles.title}>แอปเปิ้ล</Text>
                    <Text style={styles.title}>1 ส่วน 120 กรัม</Text>
                </View>
                <View style={styles.sectionDetail}>
                    <View style={styles.calDetail}>
                        <Text style={styles.textDetail}>พลังงาน</Text>
                        <Text style={styles.textDetailValueCal}>84</Text>
                        <Text style={styles.textDetail}>กิโลแคลอรี่</Text>
                    </View>
                    <View style={styles.fiberDetail}>
                        <Text style={styles.textDetail}>ใยอาหาร</Text>
                        <Text style={styles.textDetailValueFiber}>3.1</Text>
                        <Text style={styles.textDetail}>กรัม</Text>
                    </View>
                    <View style={styles.sugarDetail}>
                        <Text style={styles.textDetail}>น้ำตาล</Text>
                        <Text style={styles.textDetailValueSugar}>19</Text>
                        <Text style={styles.textDetail}>กรัม</Text>
                    </View>
                </View>

                <View style={styles.sectionAmount}>
                    <Text style={styles.textAmountOfUser}>ปริมาณแอปเปิ้ล</Text>
                    <Text style={styles.textAmountOfUser}>ของคุณแจ่มใส</Text>
                    <View style={styles.boxOfImageAmount}>
                        {/* image */}
                    </View>
                </View>
                

                <View style={styles.containAmountDetailImage}>
                    <View style={styles.containTextAmount}>
                        <Text style={styles.title}>แอปเปิ้ล 1 ส่วน</Text>
                    </View>
                    <View style={styles.containImageAmount}>
                        <View style={styles.boxOfImageAmountInside}>
                            {/* image */}
                        </View>
                        <View style={styles.boxOfImageAmountInside}>
                            {/* image */}
                        </View>
                    </View>
                </View>

                <View style={styles.containSugestText}>
                    <Text style={styles.textSugest}>แนะนำรับประทานครั้งละ 1 ส่วน</Text>
                </View>

                <View style={styles.containBenefit}>
                    <View style={styles.containTextBenefit}>
                        <Text style={styles.textBenefit}>ประโยชน์</Text>
                    </View>
                    <Text style={styles.textBenefitSub}>ช่วยป้องกันการเกิดโรคหลอดเลือดหัวใจ</Text>
                    <Text style={styles.textBenefitSub}>ช่วยให้ผนังหลอดเลือดแข็งแรง</Text>
                    <Text style={styles.textBenefitSub}>ป้องกันการเกิดโรคต้อกระจก</Text>
                    <Text style={styles.textBenefitSub}>ลดกรดในกระเพาะอาหาร ช่วยละลายเสมหะ</Text>
                    <Text style={styles.textBenefitSub}>ลดความดันโลหิต ช่วยบำรุงหัวใจ</Text>
                </View>

            </View>
            <View style={styles.footer}>
                <View style={styles.containClick}>
                    <View style={styles.containClickHere}>
                        <Text style={styles.textClickHere}>กดที่นี่</Text>
                        <Text style={styles.textClickMoreDetail}>เพื่อดูข้อมูลทางโภชนาการเพิ่มเติม</Text>
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
        backgroundColor: "#E9FFDF",
    },
    header: {
        backgroundColor: "#A2DF85",
        height: 150,
        alignItems: "center",
        position: "relative",
    },
    headerRight: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "red",
        position: "absolute",
        top: "40%",
        left: "35%",
        width: "60%",
    },
    boxIndexSugar: {
        backgroundColor: "white",
        left: "40%",
        width: "55%",
        height: "65%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        //position: "absolute",
    },
    textIndexSugar: {
        fontSize: 14,
        fontWeight: "bold",
    },
    containButton: {
        position: "absolute",
        top: "30%",
        left: "6%",
    },
    main: {
        //backgroundColor: "blue",
        //flex: 6/8,
        height: 2000,
        alignItems: "center",
    },
    titleContain: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        width: "55%",
        height: "4%",
        borderRadius: 50,
        top: "-1%",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 50,

    },
    containImageOut: {
        backgroundColor: "#AFFFCF",
        width: "70%",
        height: "17%",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    containImageIn: {
        backgroundColor: "#FFF",
        width: "92%",
        height: "92%",
        borderRadius: 30,
    },
    textNutrition: {
        fontSize: 24,
        fontWeight: "bold",
        top: "1%",
    },
    containDetail: {
        backgroundColor: "#AFFFCF",
        width: "68%",
        height: "8%",
        padding: "8%",
        top: "2.5%",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    sectionDetail: {
        flexDirection: "row",
        width: "100%",
        height: "8%",
        top: "15%",
        //backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "space-around",
    },
    calDetail: {
        width: "30%",
        height: "80%",
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    textDetailValueCal: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#09B7AD",
    },
    fiberDetail: {
        width: "30%",
        height: "80%",
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    textDetailValueFiber: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#09B7AD",
    },
    sugarDetail: {
        width: "30%",
        height: "80%",
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    textDetailValueSugar: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#FF8D23",
    },
    textDetail: {
        fontSize: 18,
        fontWeight: "bold",
    },
    sectionAmount: {
        top: "3.5%",
        width: "70%",
        height: "15%",
        backgroundColor: "#FFFBD4",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    textAmountOfUser: {
        top: "-4%",
        fontSize: 22,
        fontWeight: "bold",
    },
    boxOfImageAmount: {
        top: "3%",
        width: "50%",
        height: "55%",
        //backgroundColor: "red",
        borderRadius: 30,
    },
    containAmountDetailImage: {
        top: "5%",
        width: "86%",
        height: "15%",
        backgroundColor: "#AFFFCF",
        borderRadius: 20,
    },
    containTextAmount: {
        //backgroundColor: "#FFF",
        top: "5%",
        width: "100%",
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    containImageAmount: {
        //backgroundColor: "red",
        width: "100%",
        height: "80%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    boxOfImageAmountInside: {
        width: "42%",
        height: "74%",
        backgroundColor: "#FFF",
        borderRadius: 30,
    },
    containSugestText: {
        top: "8%",
        width: "90%",
        height: "4%",
        borderRadius: 40,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
    textSugest: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#C93131",
    },
    containBenefit: {
        top: "10%",
        width: "94%",
        height: "16%",
        backgroundColor: "#FFF",
        alignItems: "center",
        borderRadius: 30,
    },
    containTextBenefit: {
        top: "5%",
        width: "36%",
        height: "16%",
        backgroundColor: "#FFC2E3",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    textBenefit: {
        fontSize: 20,
        fontWeight: "bold",

    },
    textBenefitSub: {
        fontSize: 18,
        fontWeight: "bold",
        top: "10%",
        lineHeight: 35,
    },



    
    footer: {
        //backgroundColor: "green",
        height: 200,
        alignItems: "center",
        justifyContent: "center",

    },
    containClick: {
        backgroundColor: "#FFF",
        width: "94%",
        height: "55%",
        top: "-15%",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    containClickHere: {
        //backgroundColor: "red",
        alignItems: "center",
    },
    textClickHere: {
        fontSize: 20,
        fontWeight: "bold",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    },
    textClickMoreDetail: {
        fontSize: 16,
        fontWeight: "bold",
        top: "5%",
    },
});