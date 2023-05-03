import React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView, Image } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function SmileIcon({ colorIn, colorOut }) {
    return (
        <View style={{
            backgroundColor: colorOut,
            width: 60,
            height: 60,
            borderRadius: 60,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{
                backgroundColor: colorIn,
                width: 51,
                height: 51,
                borderRadius: 51,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <FontAwesome5 style={styles.icon} name="smile" size={50} color="black" />
            </View>
        </View>
                
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E9FFDF",
    },
    containIcon: {
        backgroundColor: "#FFF",
        width: 60,
        height: 60,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        margin: 0,
        padding: 0,
        alignSelf: 'center',
    },
});