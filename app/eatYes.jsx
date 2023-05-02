import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import ButtonBack from "../components/ButtonBack";
import React from "react";


export default function Oil() {
    const router = useRouter();
    return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
            <View style={styles.sectionHeader}>
                <Text>Eat</Text>
            </View>
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAFFF1",
    },
});