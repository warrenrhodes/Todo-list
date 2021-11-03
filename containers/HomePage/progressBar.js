import React from 'react'
import {View, StyleSheet, Text} from "react-native";

function ProgressBar({bgcolor,progress,height}){
    const styles = StyleSheet.create({
        childdiv: {
            height: '100%',
            width: progress * 120/100,
            backgroundColor: progress>1?bgcolor:'whitesmoke',
            borderRadius:10,

        },
        parentdiv :{
            height: height,
            width: 120,
            backgroundColor: 'whitesmoke',
            borderRadius: 10,
        }


    })
    return (
        <View style={styles.parentdiv}>
            <View style={styles.childdiv}>
            </View>
        </View>
    )
}
export default ProgressBar;
