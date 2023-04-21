import { StyleSheet, FlatList, View, Text, Pressable, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function ButtonBack() {
    return (
        <Pressable style={styles.containButton}>
            <AntDesign name="left" size={24} color="black" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    containButton: {
        width: 50,
        height: 50,
        backgroundColor: "#C9DDDC",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 80,
    },
});