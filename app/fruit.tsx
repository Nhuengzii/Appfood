import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import ButtonBack from "../components/ButtonBack";
import SmileIcon from "../components/SmileIcon";


export default function fruit() {
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
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        borderWidth: 4,
    },
    header: {
        backgroundColor: 'red',
        width: '100%',
        height: 150,
    },

    containButton: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60,
        top: "35%",
        left: "5%",
    },
    bottomHeader: {

    },

    containTitle: {
        backgroundColor: '#FFA3A3',
        width: '50%',
        height: "50%",
        top: "15%",
        left: "25%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        
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
        backgroundColor: 'yellow',
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
        backgroundColor: 'pink',
        alignItems: 'center',
        borderWidth: 2,
        left: "-18%",
        //zIndex: 3,
    },
    boxTextGIMed: {
        backgroundColor: 'pink',
        alignItems: 'center',
        borderWidth: 2,
        //zIndex: 3,
    },
    boxTextGIHight: {
        backgroundColor: 'pink',
        alignItems: 'center',
        borderWidth: 2,
        left: "18%",
    },
    containIcomSmile: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        top: "48%",
        width: '56%',
        height: "36%",
        backgroundColor: 'gray',
        borderRadius: 30,
        position: 'absolute',
        zIndex: 1,
        elevation: 1,

    },
});