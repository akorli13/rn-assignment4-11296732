import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Jobizz</Text>
        </View>
        
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#ffffff"

    },
    header: {
        marginTop: 30,
        marginHorizontal: 25,
    },
    headerText: {
        fontSize:22,
        fontWeight: "600",
        color: "#356899",
    }
})