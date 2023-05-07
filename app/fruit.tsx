import { Text, View, ScrollView, StyleSheet, Pressable, FlatList } from "react-native";

import ButtonBack from "../components/ButtonBack";
import SmileIcon from "../components/SmileIcon";
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';

type FruitL = {
    nameL: string | undefined;
    
    //image?: NodeRequire
    id: number;
}

type FruitR = {
    nameR: string | undefined;
    //image?: NodeRequire
    id: number;
}


const DataFruitR: FruitR[] = [
    {
        nameR: "กล้วยน้ำว้า",
        id: 1
    },
    {
        nameR: "ขนุนสุก",
        id: 2
    },
    {
        nameR: "แก้วมังกรชมพู",
        id: 3
    },
    {
        nameR: "แตงไทย",
        id: 4
    },
    {
        nameR: "ทุเรียนหมอนทอง",
        id: 5
    },
    {
        nameR: "สาลี่",
        id: 6
    },
    {
        nameR: "มะม่วงเขียวเสวย",
        id: 7
    },
    {
        nameR: "แคนตาลูปเหลือง",
        id: 8
    },
    {
        nameR: "มังคุด",
        id: 9
    },
    {
        nameR: "ลิ้นจี่",
        id: 10
    },
    {
        nameR: "ส้มโอ",
        id: 11
    },
    {
        nameR: "สับปะรดใหญ่",
        id: 12
    },
    {
        nameR: "เชอร์รี่",
        id: 13
    },
    {
        nameR: "แอปเปิ้ลฟูจิ",
        id: 14
    },
    {
        nameR: "สตรอเบอร์รี่",
        id: 15
    },
    {
        nameR: "องุ่นแดงไร้เมล็ด",
        id: 16
    },
    {
        nameR: "แอปเปิ้ลกาล่า",
        id: 17
    },

];




const DataFruitL: FruitL[] = [
    {
        nameL: "กล้วยไข่",
        id: 1
    },
    {
        nameL: "กล้วยหอม",
        
        id: 2
    },
    {
        nameL: "แก้วมังกรขาว",
        id: 3
    },
    {
        nameL: "เงาะ",
        id: 4
    },
    {
        nameL: "แตงโม",
        id: 5
    },
    {
        nameL: "ฝรั่ง",
        id: 6
    },
    {
        nameL: "มะขามหวาน",
        id: 7
    },
    {
        nameL: "มะม่วงน้ำดอกไม้",
        id: 8
    },
    {
        nameL: "มะละกอสุก",
        id: 9
    },
    {
        nameL: "ลำไย",
        id: 10
    },
    {
        nameL: "ส้มเขียวหวาน",
        id: 11
    },
    {
        nameL: "สับปะรดภูแล",
        id: 12
    },
    {
        nameL: "ชมพู่",
        id: 13
    },
    {
        nameL: "องุ่นเขียว",
        id: 14
    },
    {
        nameL: "ลองกอง",
        id: 15
    },
    {
        nameL: "สละ",
        id: 16
    },
    {
        nameL: "แอปเปิ้ลเขียว",
        id: 17
    },
    {
        nameL: "กี่วี่",
        id: 18
    },
];

const Element = ({ name }) => (
    <View style={styles.containElement}>
        <View style={styles.containPicElement}>
            <View></View>
        </View>
        <View style={styles.containTitleElement}>
            <Text style={styles.textInElement}>{ name }</Text>
        </View>
    </View>
);

const renderElementL = ({ item }) => (
    <Element name={item.nameL} />
);

const renderElementR = ({ item }) => (
    <Element name={item.nameR} />
);



export default function FruitPage() {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containButton}>
                        <ButtonBack colorBg={"#126D68"} colorStyle={"white"}></ButtonBack>
                    </View>
                        <View style={styles.containTitle}>
                            <Text style={styles.title}>ผลไม้</Text>
                        </View>
                    <View style={styles.bottomHeader}>
                    
                    </View>
                </View>
                <View style={styles.main}>
                    <View style={styles.containIndexSugar}>
                        <View style={styles.containTextGI}>
                            <Text style={styles.textGIฺBig}>GI = ค่าดัชนีน้ำตาล</Text>
                        </View>
                        <View style={styles.containGIDetail}>
                            <View style={styles.boxTextGILow}>
                                <Text style={styles.textGI}>ต่ำ</Text>
                                <Text style={styles.textGI}>GI {'<'}55</Text>
                            </View>
                            <View style={styles.boxTextGIMed}>
                                <Text style={styles.textGI}>กลาง</Text>
                                <Text style={styles.textGI}>GI 55-69</Text>
                            </View>
                            <View style={styles.boxTextGIHight}>
                                <Text style={styles.textGI}>สูง</Text>
                                <Text style={styles.textGI}>GI {'>'}70</Text>
                            </View>
                        </View>
                        <View style={styles.containIcomSmile}>
                            <SmileIcon colorOut={'white'} colorIn={'#03DB18'} sizeIn={51} sizeOut={64}></SmileIcon>
                            <SmileIcon colorOut={'white'} colorIn={'#FCFF6C'} sizeIn={51} sizeOut={64}></SmileIcon>
                            <SmileIcon colorOut={'white'} colorIn={'#FF0000'} sizeIn={51} sizeOut={64}></SmileIcon>
                        </View>

                        <View style={styles.sectionShowList}>
                            <View style={styles.containListLeft}>
                                <FlatList
                                    data={DataFruitL}
                                    renderItem={renderElementL}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                            <View style={styles.containListRight}>
                                <FlatList
                                    data={DataFruitR}
                                    renderItem={renderElementR}
                                    keyExtractor={item => item.id}
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
        backgroundColor: '#FFF1E0',
        borderWidth: 4,
    },
    header: {
        backgroundColor: 'rgba(198, 242, 178, 0.65)',
        width: '100%',
        height: 150,
        alignItems: 'center',
    },

    containButton: {
        //backgroundColor: 'yellow',
        width: 60,
        height: 60,
        top: "35%",
        left: "5%",
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomHeader: {
        backgroundColor: '#FFF1E0',
        width: 1000,
        height: 1000,
        borderRadius: 1000,
        top: "30%",
        //position: 'absolute',
        zIndex: 1,
        elevation: 0,
        
    },

    containTitle: {
        backgroundColor: '#FFA3A3',
        width: '50%',
        height: "50%",
        top: "55%",
        //left: "25%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        position: 'absolute',
        zIndex: 2,
        elevation: 2,
        
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    main: {
        flex: 1,
        //backgroundColor: 'blue',
        height: 4300,
    },
    containIndexSugar: {
        flex: 1/8,
        top: "1%",
        //backgroundColor: 'blue',
        width: '100%',
        height: "15%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    containTextGI: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        top: "-42%"
    },
    textGI: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textGIฺBig: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    containGIDetail: {
        top: "15%",
        flexDirection: 'row',
        zIndex: 3,
        elevation: 3,
        position: 'absolute',
    },
    boxTextGILow: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        left: "-18%",
        paddingHorizontal: 10,
        borderRadius: 10,
        //zIndex: 3,
    },
    boxTextGIMed: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        //zIndex: 3,
    },
    boxTextGIHight: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        left: "18%",
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    containIcomSmile: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        top: "22%",
        width: '64%',
        height: "36%",
        maxHeight: 100,
        maxWidth: 300,
        backgroundColor: '#616161',
        borderRadius: 30,
        position: 'absolute',
        zIndex: 1,
        elevation: 1,

    },
    sectionShowList: {
        top: "60%",
        //backgroundColor: 'red',
        width: '100%',
        flexDirection: 'row',
        height: 3900,
        position: 'absolute',
    },
    containElement: {
        //backgroundColor: 'yellow',
        //borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    containListLeft: {
        //backgroundColor: 'green',
        flex: 1/2,
    },
    containListRight: {
        //backgroundColor: 'blue',
        flex: 1/2,
    },
    containPicElement: {
        backgroundColor: '#FFF',
        flex: 1/2,
        width: '75%',
        height: 150,
        padding: 10,
        borderRadius: 20,
    },
    containTitleElement: {
        backgroundColor: '#DCFFD9',
        width: '70%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
    },
    textInElement: {},
});