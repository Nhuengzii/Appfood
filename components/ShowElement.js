import { StyleSheet, FlatList, View, Text, } from 'react-native';


const DataNutrition = [
    {
        "title": "ข้าว-แป้ง",
        "detail": "",
        "amount": 1,
        "unit": "ทัพพี",
        "id": "1"
    },
    {
        "title": "ผัก",
        "detail": "",
        "amount": 2,
        "unit": "ทัพพี",
        "id": "2"
    },
    {
        "title": "ผลไม้",
        "detail": "",
        "amount": 3,
        "unit": "ส่วน",
        "id": "3"
    },
    {
        "title": "เนื้อสัตว์-ไข่",
        "detail": "ไข่ 1 ฟอง = เนื้อสัตว์ 2 ช้อนโต๊ะ",
        "amount": 1,
        "unit": "ช้อนโต๊ะ",
        "id": "4"
    },
    {
        "title": "ถั่ว",
        "detail": "",
        "amount": 1,
        "unit": "ส่วน",
        "id": "5"
    },
    {
        "title": "ผลิตภัณฑ์จากนม",
        "detail": "",
        "amount": 1,
        "unit": "แก้ว",
        "id": "6"
    },
    {
        "title": "น้ำ",
        "detail": "",
        "amount": 1,
        "unit": "แก้ว",
        "id": "7"
    },
    {
        "title": "น้ำมัน",
        "detail": "",
        "amount": 1,
        "unit": "ช้อนชา",
        "id": "8"
    },
    {
        "title": "น้ำตาล",
        "detail": "",
        "amount": 1,
        "unit": "ช้อนชา",
        "id": "9"
    },
]

const Element = ({ nameTitle, detail, amount, unit }) => (
    <View style={styles.sectionElement}>
        <Text style={styles.subtitle}>{ nameTitle }</Text>
        <Text style={styles.subtitle}>{ amount }  { unit }</Text>
        <Text style={styles.paragrah}>{ detail }</Text>
    </View>
);

const renderItem = ({ item }) =>  (
    <Element nameTitle={item.title} detail={item.detail} amount={item.amount} unit={item.unit}></Element>
);

export default function ShowElement () {
    return (
        <FlatList
            data={DataNutrition}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={false}
        />
    );
}

const styles = StyleSheet.create({

    sectionElement: {
        flex: 1,
        backgroundColor: "green",
        borderColor: "#000",
        borderWidth: 4,
        borderRadius: 30,
        marginBottom: 5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    Bigtitle: {
        fontSize: 96,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 26,
        color: "#000",
    },
    paragrah: {
        fontSize: 16,
        color: "#fff",
    },
});