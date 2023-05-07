import { Text, View, ScrollView, StyleSheet, Pressable, FlatList } from "react-native";

import ButtonBack from "../components/ButtonBack";
import SmileIcon from "../components/SmileIcon";
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';

type Flour = {
    name: string | undefined;
    //image?: NodeRequire
    id: number;
}

const DataFlourL: Flour[] = [
    {
        name: "เส้นเล็ก",
        id: 1,
    },
    {
        name: "ขนมจีน",
        id: 2,
    },
    {
        name: "ข้าวเหนียวนึ่ง",
        id: 3,
    },
    {
        name: "บะหมี่หยก",
        id: 4,
    },
    {
        name: "ลูกเดือย",
        id: 5,
    },
    {
        name: "ก๋วยจั๊บ",
        id: 6,
    },
    {
        name: "ข้าวกล้อง",
        id: 7,
    },
    {
        name: "แป้งข้าวจ้าว",
        id: 8,
    },
    {
        name: "เผือก",
        id: 9,
    },
    {
        name: "มันฝรั่ง",
        id: 10,
    },
    {
        name: "ถั่วดำ",
        id: 11,
    },
    {
        name: "ถั่วแดง",
        id: 12,
    },
    {
        name: "วุ้นเส้น",
        id: 13,
    },
    {
        name: "ข้าวเกรียบปลา",
        id: 14,
    },
    {
        name: "ขนมปังแซนวิช",
        id: 15,
    },
]

const DataFlourR: Flour[] = [
    {
        name: "เส้นใหญ่",
        id: 1,
    },
    {
        name: "ข้าวโพดหวาน",
        id: 2,
    },
    {
        name: "บะหมี่",
        id: 3,
    },
    {
        name: "ข้าวเหนียวดำ",
        id: 4,
    },
    {
        name: "เส้นหมี่",
        id: 5,
    },
    {
        name: "บะหมี่กึ่งสำเร็จรูป",
        id: 6,
    },
    {
        name: "ข้าวไรซ์เบอร์รี่",
        id: 7,
    },
    {
        name: "ข้าวขาวสำเร็จรูป",
        id: 8,
    },
    {
        name: "มันเทศ",
        id: 9,
    },
    {
        name: "แป้งสาคู",
        id: 10,
    },
    {
        name: "ถั่วเขียว",
        id: 11,
    },
    {
        name: "ถั่วเหลือง",
        id: 12,
    },
    {
        name: "ฟักทอง",
        id: 13,
    },
    {
        name: "ขนมปังกรอบ",
        id: 14,
    },
    {
        name: "ขนมปังโฮลวีท",
        id: 15,
    },
    
]






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
    <Element name={item.name}/>
);

const renderElementR = ({ item }) => (
    <Element name={item.name} />
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
                        <ButtonBack colorBg={"#A3461E"} colorStyle={"white"}></ButtonBack>
                    </View>
                        <View style={styles.containTitle}>
                            <Text style={styles.title}>ข้าวแป้ง</Text>
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
                                    data={DataFlourL}
                                    renderItem={renderElementL}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                            <View style={styles.containListRight}>
                                <FlatList
                                    data={DataFlourR}
                                    renderItem={renderElementL}
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
        backgroundColor: 'rgba(255, 115, 55, 0.65)',
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
        backgroundColor: '#FFE0A3',
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
        height: 3500,
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
        //backgroundColor: 'yellow',
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
        top: "24%",
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
        height: 3200,
        position: 'absolute',
        flexDirection: 'row',
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
        width: '80%',
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