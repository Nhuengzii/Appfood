import { StyleSheet, Text, View, ScrollView, FlatList, Button} from "react-native";
import ShowElement from "../components/ShowElement";
import { useRouter } from "expo-router";



export default function nutrition () {
    const router = useRouter();
    return (
        <ScrollView style={styles.container}>
        
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>ข้อมูลทางโภชนาการ</Text>
                </View>
                <Text style={styles.titleCal}>พลังงานที่ต้องการต่อวัน</Text>
                <View>
                    <Text>1400 Kcal</Text>
                </View>
            </View>

            <View style={styles.main}>
                <ShowElement></ShowElement>
            </View>
            <View style={styles.flooter}>
            <Button
                style={styles.button}
                title="back"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                onPress={() => router.back()}
            />
                
            </View>
        </ScrollView>
    );
}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "blue",
        flexDirection: "column",
        
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
        backgroundColor: "red",
        padding: 5,
        paddingTop: 5,
        paddingBottom:10,
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
        paddingBottom: 150,
        position: "relative",
        marginBottom: 10,
    },

    blockHeader: {
        width: "78%",
        height: "180%",
        backgroundColor: "#889EEE",
        color: "white",
        position: "absolute",
        left: "12%",
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
    },

    section: {
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
    flooter: {
        flex: 1,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
        marginBottom: 10,
    },

    
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },
    titleCal: {
        fontSize: 24,
        color: "#000",
        position: "absolute",
        bottom: "130%",
        padding: 0,
        margin: 0,
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
    button: {
        fontSize: 24,
        borderRadius: 30,
    },
});
