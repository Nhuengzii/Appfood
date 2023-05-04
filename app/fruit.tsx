import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import React from "react";

import ButtonBack from "../components/ButtonBack";
import SmileIcon from "../components/SmileIcon";

type Fruit = {
    name: string;
    //image?: NodeRequire
    id: number;
}

const DataFruit: Fruit[] = [
    {
        name: "กล้วย",
        id: 1
    },
    {
        name: "กล้วย",
        id: 2
    },
    {
        name: "กล้วย",
        id: 3
    },
    {
        name: "กล้วย",
        id: 4
    },
    {
        name: "กล้วย",
        id: 5
    },
    {
        name: "กล้วย",
        id: 6
    },
    {
        name: "กล้วย",
        id: 7
    },
    {
        name: "กล้วย",
        id: 8
    },
    {
        name: "กล้วย",
        id: 9
    },
    {
        name: "กล้วย",
        id: 10
    },
    {
        name: "กล้วย",
        id: 11
    },
    {
        name: "กล้วย",
        id: 12
    },
    {
        name: "กล้วย",
        id: 13
    },
    {
        name: "กล้วย",
        id: 14
    },
    {
        name: "กล้วย",
        id: 15
    },
    {
        name: "กล้วย",
        id: 16
    },
    {
        name: "กล้วย",
        id: 17
    },
    {
        name: "กล้วย",
        id: 18
    },
];

export default function FruitPage() {
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
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'green',
        borderWidth: 4,
    },
    header: {
        backgroundColor: 'red',
        width: '100%',
        height: 150,
        alignItems: 'center',
    },

    containButton: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60,
        top: "35%",
        left: "5%",
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomHeader: {
        backgroundColor: 'white',
        width: 1000,
        height: 1000,
        borderRadius: 1000,
        top: "40%",
        //position: 'absolute',
        zIndex: 1,
        elevation: 1,
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
        height: 2000,
    },
    containIndexSugar: {
        flex: 1/8,
        top: "2%",
        backgroundColor: 'blue',
        width: '100%',
        height: "30%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    containTextGI: {
        //backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        top: "-20%"
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
        top: "-10%",
        flexDirection: 'row',
        zIndex: 3,
        elevation: 3,
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
        top: "48%",
        width: '64%',
        height: "36%",
        backgroundColor: '#616161',
        borderRadius: 30,
        position: 'absolute',
        zIndex: 1,
        elevation: 1,

    },
});