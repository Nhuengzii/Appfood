import { Text, Button, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import ButtonBack from "../components/ButtonBack";


export default function VegFruit() {
    //const router = useRouter();
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1 }}>
                <View style={styles.header}></View>
                    <View style={styles.mainContain}>
                    <View style={styles.sectionMeat}></View>
                    <View style={styles.sectionMilk}></View>
                    <View style={styles.sectionBean}></View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "pink",
        flexDirection: "column",
    },
    header: {
        width: "100%",
        height: "6%",
        backgroundColor: "yellow",
    },
    mainContain: {
        width: "100%",
        height: 1500,
        backgroundColor: "pink",
    },
    sectionMeat: {
        flex: 1,
        height: "100%",
        //width: "100%",
        //height: "100%",
        backgroundColor: "red",
    },
    sectionMilk: {
        flex: 1,
        backgroundColor: "blue",
    },
    sectionBean: {
        flex: 1,
        backgroundColor: "green",
        borderWidth: 5,
    },
});