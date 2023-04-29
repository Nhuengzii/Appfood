import { StyleSheet, FlatList, View, Text, Pressable, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from "expo-router";




export default function ButtonBack({ colorBg, colorStyle }) {
    const router = useRouter();
    return (
        <Pressable onPress={() => router.back()} style={{
            width: 50,
            height: 50,
            backgroundColor: colorBg,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 80,
        }}>
            <AntDesign name="left" size={24} color="black" />
        </Pressable>
    );
}
