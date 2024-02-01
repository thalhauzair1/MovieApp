import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Form = () =>(
    <View style={styles.header}>
        <Text style={styles.title}>Open Weather App</Text>
    </View>

)

export default Form;

const styles = StyleSheet.create({
    header: {
        display:'flex',
        flex:1,
        justifyContent:'center',
    },
    title: {
        fontSize: 35,
        fontWeight:'bold'
    }
})