import React from "react";
import { View, StyleSheet,Text } from "react-native";


export default function flour() {
    return (
        <View style={styles.container}>
            <Text>Flour</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});