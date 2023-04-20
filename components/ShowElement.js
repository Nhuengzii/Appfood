import { StyleSheet, FlatList, View, Text, } from 'react-native';


const DataNutrition = [
    {
        "title": "Nutrition1",
        "detail": "This is the second page of your app1.",
        "id": "1"
    },
    {
        "title": "Nutrition2",
        "detail": "This is the second page of your app2.",
        "id": "2"
    },
    {
        "title": "Nutrition3",
        "detail": "This is the second page of your app3.",
        "id": "3"
    },
    {
        "title": "Nutrition4",
        "detail": "This is the second page of your app4.",
        "id": "4"
    },
    {
        "title": "Nutrition5",
        "detail": "This is the second page of your app5.",
        "id": "5"
    },
    {
        "title": "Nutrition6",
        "detail": "This is the second page of your app6.",
        "id": "6"
    },
]

const Element = ({ nameTitle, detail }) => (
    <View style={styles.sectionElement}>
        <Text style={styles.subtitle}>This is { nameTitle }</Text>
        <Text style={styles.paragrah}>{ detail }</Text>
    </View>
);

const renderItem = ({ item }) =>  (
    <Element nameTitle={item.title} detail={item.detail}></Element>
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
        fontSize: 64,
        fontWeight: "bold",
    },
    Bigtitle: {
        fontSize: 96,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
    paragrah: {
        fontSize: 16,
        color: "#fff",
    },
});