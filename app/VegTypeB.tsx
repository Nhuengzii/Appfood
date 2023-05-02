import { StyleSheet, Text, View, FlatList} from "react-native";
import ButtonBack from "../components/ButtonBack";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';


const DataVegLeft:VegLeft[] = [
    {
        nameLeft: "แครอท",
        id: "1",
    },
    {
        nameLeft: "ถั่วงอก",
        id: "2",
    },
    {
        nameLeft: "บีทรูท",
        id: "3",
    },
    {
        nameLeft: "ยอดแค",
        id: "4",
    },
    {
        nameLeft: "ยอดสะเดา",
        id: "5",
    },
    {
        nameLeft: "ยอดผักกวางตุ้ง",
        id: "6",
    },
    {
        nameLeft: "ใบกะเฉด",
        id: "7",
    },
    {
        nameLeft: "ใบยอ",
        id: "8",
    },
    {
        nameLeft: "ตะเกียงกะหล่ำ",
        id: "9",
    },
    {
        nameLeft: "มะเขือเทศเสวย",
        id: "10",
    },
    {
        nameLeft: "มะละกอดิบ",
        id: "11",
    },
    {
        nameLeft: "เห็ดนางรม",
        id: "12",
    },
    {
        nameLeft: "หอมหัวใหญ่",
        id: "13",
    },
    {
        nameLeft: "ใบ-ดอกขี้เหล็ก",
        id: "14",
    },
    {
        nameLeft: "ถั่วลันเตา",
        id: "15",
    },
    {
        nameLeft: "ถั่วแขก",
        id: "16",
    },
    {
        nameLeft: "ต้นกระเทียม",
        id: "17",
    },
    {
        nameLeft: "มะระจีน",
        id: "18",
    },
    {
        nameLeft: "เห็ดเป่าฮื้อ",
        id: "19",
    },
];

const DataVegRight:VegRight[] = [
    {
        nameRight: "ยอดมะพร้าวอ่อน",
        id: "1",
    },
    {
        nameRight: "ดอกขจร",
        id: "2",
    },
    {
        nameRight: "พริกหวาน",
        id: "3",
    },
    {
        nameRight: "ผักคะน้า",
        id: "4",
    },
    {
        nameRight: "รากบัว",
        id: "5",
    },
    {
        nameRight: "บร๊อกโคลี่",
        id: "6",
    },
    {
        nameRight: "มะเขือกรอบ",
        id: "7",
    },
    {
        nameRight: "หน่อไม้ปี๊ป,ไผ่ตง",
        id: "8",
    },
    {
        nameRight: "สะตอ",
        id: "9",
    },
    {
        nameRight: "ผักหวาน",
        id: "10",
    },
    {
        nameRight: "ถั่วฝักยาว",
        id: "11",
    },
    {
        nameRight: "ถั่วพู",
        id: "12",
    },
    {
        nameRight: "ยอดชะอม",
        id: "13",
    },
    {
        nameRight: "ยอดกระถิน",
        id: "14",
    },
    {
        nameRight: "ดอกโสน",
        id: "15",
    },
    {
        nameRight: "ผักติ้ว",
        id: "16",
    },
    {
        nameRight: "ใบทองหลาง",
        id: "17",
    },
    {
        nameRight: "ข้าวโพดอ่อน",
        id: "18",
    },
    {
        nameRight: "ตำลึง",
        id: "19",
    },

];


type VegLeft = {
    nameLeft: string;
    id: string;
}

type VegRight = {
    nameRight: string;
    id: string;
}

const ShowVegNameLeft = ({nameLeft}) => (
    <View  style={{ justifyContent: "center", alignItems: "flex-start", marginVertical: "2%" }}>
        <Text style={styles.textNameVegLeft}>{nameLeft}</Text>
    </View>
);

const ShowVegNameRight = ({nameRight}) => (
    <View  style={{ justifyContent: "center",alignItems: "flex-start", marginVertical: "2%" }}>
        <Text style={styles.textNameVegRight}>{nameRight}</Text>
    </View>
);

const renderVegNameLeft = ({item}) => (
    <ShowVegNameLeft nameLeft={item.nameLeft}></ShowVegNameLeft>
);

const renderVegNameRight = ({item}) => (
    <ShowVegNameRight nameRight={item.nameRight}></ShowVegNameRight>
);




export default function VegTypeB() {
    const router = useRouter();
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    
    const ButtonVeg = () => (
        <View style={styles.buttonA}>
            <View style={styles.buttonLayerOutA}></View>
            <View style={styles.buttonLayerInA}>
                <Text style={styles.textButtonฺA}>ผัก ข</Text>
            </View>
        </View>
    );



    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.sectionHeader}>
                <View style={styles.containButton}>
                    <ButtonBack colorBg={"#8297DF"} colorStyle={"white"} />
                </View>

                <View style={styles.containTitle}>
                    <ButtonVeg></ButtonVeg>
                </View>

            </View>
            <View style={styles.sectionMain}>
                <View style={styles.contentMain}>
                    <View style={styles.containVegDetail}>
                        <Text style={styles.textVegDetail}>ผักที่ให้พลังงานมีวิตามินและใย</Text>
                        <Text style={styles.textVegDetail}>อาหารสูงช่วยลดการดูดซึมน้ำ</Text>
                        <Text style={styles.textVegDetail}>ตาลและไขมันได้ ดังนี้</Text>
                    </View>

                    <View style={styles.containListVegName}>

                        <View style={styles.boxListVegNameLeft}>
                            <FlatList
                                data={DataVegLeft}
                                renderItem={renderVegNameLeft}
                                keyExtractor={(item) => item.id}
                            />
                        </View>

                        <View style={styles.boxListVegNameRight}>
                            <FlatList
                                data={DataVegRight}
                                renderItem={renderVegNameRight}
                                keyExtractor={(item) => item.id}
                            />
                        </View>

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
    },
    sectionHeader: {
        flex: 1/4,
        //width: "100%",
        //height: "25%",
        //backgroundColor: "red",
        height: 190,
        position: "relative",
    },
    containButton: {
        position: "absolute",
        top: "30%",
        left: "6%",
    },
    containTitle: {
        position: "absolute",
        top: "30%",
        width: "100%",
        height: "70%",
        //backgroundColor: "pink",
        alignItems: "center",
    },
    buttonA: {
        width: "50%",
        height: "80%",
        //backgroundColor: "red",
        position: "relative",
    },
    buttonLayerOutA: {
        position: "absolute",
        left: "18%",
        top: "10%",
        width: "60%",
        height: "64%",
        backgroundColor: "#D8D294",
        borderRadius: 30,
    },
    buttonLayerInA: {
        position: "absolute",
        left: "13%",
        top: "16%",
        width: "60%",
        height: "60%",
        backgroundColor: "#F5EFB2",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonฺA: {
        top: "-8%",
        fontSize: 22,
        fontWeight: "bold",
    },
    sectionMain: {
        flex: 1,
        height: 900,
        //backgroundColor: "red",
    },
    contentMain: {
        flex: 1,
        //backgroundColor: "yellow",
    },
    containVegDetail: {
        flex: 1/6,
        //backgroundColor: "pink",
        justifyContent: 'center',
        alignItems: 'center',
        top: "-2%"
    },
    containListVegName: {
        flex: 5/6,
        //backgroundColor: "green",
        position: "relative",
        alignItems: "center",
        flexDirection: "row",
        top: "-15%",
    },
    textVegDetail: {
        fontSize: 20,
    },
    boxListVegNameLeft: {
        //position: "absolute",
        backgroundColor: "#FBFFEA",
        width: "42.5%",
        marginLeft: "7.5%",
        height: "90%",
        top: "2%",

    },
    boxListVegNameRight: {
        //position: "absolute",
        backgroundColor: "#FBFFEA",
        width: "42.5%",
        height: "90%",
        top: "2%",
        marginRight: "5%",
        //margin: "5%",
    },
    textNameVeg: {
        fontSize: 18,
    },
    textNameVegLeft: {
        fontSize: 18,
        left: "15%",
    },
    textNameVegRight: {
        fontSize: 18,
        left: "5%",
    }

});
