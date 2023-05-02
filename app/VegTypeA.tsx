import { StyleSheet, Text, View, FlatList} from "react-native";
import ButtonBack from "../components/ButtonBack";
import { useRouter } from "expo-router";
import React from "react";

const DataVegLeft:VegLeft[] = [
    {
        nameLeft: "ผักกาดขาว",
        id: "1",
    },
    {
        nameLeft: "ผักแว่น",
        id: "2",
    },
    {
        nameLeft: "ผักปวยเล้ง",
        id: "3",
    },
    {
        nameLeft: "กะหล่ำปลี",
        id: "4",
    },
    {
        nameLeft: "มะเขือเทศ",
        id: "5",
    },
    {
        nameLeft: "แตงร้าน",
        id: "6",
    },
    {
        nameLeft: "ฟักเขียว",
        id: "7",
    },
    {
        nameLeft: "บวบ",
        id: "8",
    },
    {
        nameLeft: "คูณ",
        id: "9",
    },
    {
        nameLeft: "ผักกาดสลัด",
        id: "10",
    },
    {
        nameLeft: "ผักกาดเขียว",
        id: "11",
    },
    {
        nameLeft: "ยอดฟักทองอ่อน",
        id: "12",
    },
    {
        nameLeft: "ดอกกะหล่ำ",
        id: "13",
    },
];

const DataVegRight:VegRight[] = [
    {
        nameRight: "สายบัว",
        id: "1",
    },
    {
        nameRight: "ใบโหระพา",
        id: "2",
    },
    {
        nameRight: "คึ่นช่าย",
        id: "3",
    },
    {
        nameRight: "ขมิ้นขาว",
        id: "4",
    },
    {
        nameRight: "แตงโมอ่อน",
        id: "5",
    },
    {
        nameRight: "แฟง",
        id: "6",
    },
    {
        nameRight: "พริกหยวก",
        id: "7",
    },
    {
        nameRight: "หยวกกล้วยอ่อน",
        id: "8",
    },
    {
        nameRight: "แตงกวา",
        id: "9",
    },
    {
        nameRight: "น้ำเต้า",
        id: "10",
    },
    {
        nameRight: "พริกหนุ่ม",
        id: "11",
    },
    {
        nameRight: "ตั้งโอ๋",
        id: "12",
    },
    {
        nameRight: "ผักบุ้งแดง",
        id: "13",
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
    
    const ButtonVeg = () => (
        <View style={styles.buttonA}>
            <View style={styles.buttonLayerOutA}></View>
            <View style={styles.buttonLayerInA}>
                <Text style={styles.textButtonฺA}>ผัก ก</Text>
            </View>
        </View>
    );



    return (
        <View style={styles.container}>
            <View style={styles.sectionHeader}>
                <View style={styles.containButtonBack}>
                <View style={styles.containButton}>
                        <ButtonBack colorBg={"#8297DF"} colorStyle={"white"} />
                    </View>
                </View>

                <View style={styles.containTitle}>
                    <ButtonVeg></ButtonVeg>
                </View>

            </View>
            <View style={styles.sectionMain}>
                <View style={styles.contentMain}>
                    <View style={styles.containVegDetail}>
                        <Text style={styles.textVegDetail}>ผักที่ให้พลังงานน้อยมาก</Text>
                        <Text style={styles.textVegDetail}>รับประทานได้ตามต้องการ ดังนี้</Text>
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
        //backgroundColor: "#F7FCF1",
        position: "relative",
    },
    containButtonBack: {
        position: "absolute",
        top: "30%",
        left: "6%",
    },
    containButton: {
        position: "absolute",
        top: "30%",
        left: "6%",
        //backgroundColor: "red",
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
        backgroundColor: "#8DCA93",
        borderRadius: 30,
    },
    buttonLayerInA: {
        position: "absolute",
        left: "13%",
        top: "16%",
        width: "60%",
        height: "60%",
        backgroundColor: "#B0F3B7",
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
    },
    containListVegName: {
        flex: 5/6,
        //backgroundColor: "green",
        position: "relative",
        alignItems: "center",
        flexDirection: "row",
    },
    textVegDetail: {
        fontSize: 20,
    },
    boxListVegNameLeft: {
        //position: "absolute",
        backgroundColor: "#EAFFEA",
        width: "42.5%",
        marginLeft: "7.5%",
        height: "85%",
        top: "-5%",

    },
    boxListVegNameRight: {
        //position: "absolute",
        backgroundColor: "#EAFFEA",
        width: "42.5%",
        height: "85%",
        top: "-5%",
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
