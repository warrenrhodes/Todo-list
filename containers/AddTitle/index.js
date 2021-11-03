import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import colors from '../HomePage/Colors'
import { useState } from 'react'

export default function AddlistTitle(props) {

    const backgroundColor = ["#5d8aa8",
        "#f0f8ff",
        "#e32636",
        "#efdecd",
        "#00ffff",
        "#ffbf00",
        "#9966cc"]



    const [color, setcolor] = useState(backgroundColor[0])
    const [name, setname] = useState("")

    function renderColor() {
        return backgroundColor.map(colorss => {

            return <TouchableOpacity key={colorss} style={[styles.colorselected, { backgroundColor: colorss }]} onPress={() => setcolor(colorss)} />
        });
    }


    const addTodo = () => {

        const list = { name, color }
        props.addList(list)
        setname("")
        props.closeModel()
    }


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">


            <TouchableOpacity style={{ position: 'absolute', top: 64, right: 32, backgroundColor: "red" }} onPress={props.closeModel}>
                <AntDesign name="close" size={34} color={colors.white} />
            </TouchableOpacity>

            <View style={{ alignSelf: "stretch", marginHorizontal: 12 }}>
                <Text style={styles.title}> Create Title Of List</Text>

                <TextInput style={styles.input} placeholder="Title Name" placeholderTextColor="white" onChangeText={text => setname(name => text)} />

                <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 15 }}>
                    {renderColor()}
                </View>

                <TouchableOpacity style={[styles.create, { backgroundColor: color }]} onPress={addTodo}>
                    <Text style={{ color: colors.white, fontWeight: "900", fontSize: 25 }}> Create</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backgroundColor
    },
    title: {
        color: colors.lightBlue,
        fontSize: 30,
        fontWeight: "700",
        alignSelf: "center",
        marginBottom: 16
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 8,
        borderColor: colors.blue,
        height: 60,
        marginTop: 20,
        color: colors.lightBlue,
        paddingHorizontal: 20
    },
    create: {
        marginTop: 24,
        height: 50,
        width: 300,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    colorselected: {
        width: 30,
        height: 30,
        borderRadius: 5
    }
})

