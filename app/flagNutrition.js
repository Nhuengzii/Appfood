import { Text, Button, View, SafeAreaView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";


export default function FindMenu() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <Button title="Go back" onPress={() => router.back()} />
            <Text>ธงโภชนาการ</Text>
            
            <View>
                <Text>ข้าว-แป้ง</Text>
            </View>
            <View>
                <Text>ผัก</Text>
            </View>
            <View>
                <Text>ผลไม้</Text>
            </View>
            <View>
                <Text>เนื้อสัตว์</Text>
            </View>
            <View>
                <Text>น้ำมัน</Text>
                <Text>เครื่องปรุง</Text>
            </View>
            <View>
                <Text>น้ำ</Text>
            </View>
            <View>
                <Text>ควรดื่มน้ำวันละ</Text>
                <Text>8 แก้ว</Text>
            </View>
            <View>
                <Text>#รูปแก้วน้ำ 8 แก้ว</Text>
            </View>

            
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",           
    },
});