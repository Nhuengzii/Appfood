import { Text, Button, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";


export default function FindMenu() {
    const router = useRouter();
    return (
        <ScrollView style={styles.container}>
            <View style= {styles.sectionBar}>
                <Button  style={styles.buttonBackHome} title="MENU" onPress={() => router.back()} />
            </View>
            
            <Text style={styles.title}>ธงโภชนาการ</Text>

            <View style={styles.sectionPresable}>
                
                
                
                <View style={styles.bottonContainerFlour}>
                    <Pressable style={styles.button}>
                        <Text>ข้าว-แป้ง</Text>
                    </Pressable>
                </View>
                <View style={styles.bottonContainerVegFruit}>
                    <Pressable style={styles.button}>
                        <Text>ผัก</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text>ผลไม้</Text>    
                    </Pressable>
                    
                </View>

                <View style={styles.bottonContainerMilkMeat}>
                    <Pressable style={styles.button}>
                        <Text>เนื้อสัตว์</Text>    
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text>กลุ่มนม</Text>    
                    </Pressable>
                    
                </View>
                <View style={styles.bottonContainer}>
                    <Pressable style={styles.button}>
                        <Text>น้ำมัน</Text>
                        <Text>เครื่องปรุง</Text>                    
                    </Pressable>
                </View>
            </View>
            <View style={styles.sectionWater}>
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
            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#4A4083",
        flexDirection: "column",          
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    },
    bottonContainerFlour: {
        backgroundColor: "red",
        borderColor: "#000",
        borderWidth: 1,
        padding: 10,
        alignItems: "center",
        position: "relative",
        height: "10%",
    },

    bottonContainerVegFruit: {
        backgroundColor: "green",
        borderColor: "#000",
        borderWidth: 1,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
        position: "relative",
    },

    bottonContainerMilkMeat: {
        backgroundColor: "purple",
        borderColor: "#000",
        borderWidth: 1,
        padding: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        position: "relative",
    },
    sectionPresable: {
        backgroundColor: "pink",
        flex: 1,
    },
    title: {
        fontSize: 20,
    },
    sectionWater: {
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        position: "relative",
    },
    buttonBackHome: {
        backgroundColor: "red",    
    },

    sectionBar: {
        backgroundColor: "blue",
        flex: 1,
    },
});