import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import ButtonBack from "../components/ButtonBack";
import SmileIcon from "../components/SmileIcon";


export default function fruit() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.header}>

                </View>
                <View style={styles.main}>

                </View>
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        borderWidth: 4,
    },
    header: {
        backgroundColor: 'red',
        width: '100%',
        height: 200,
    },
    main: {
        flex: 1,
        backgroundColor: 'blue',
        height: 1200,
    },
});