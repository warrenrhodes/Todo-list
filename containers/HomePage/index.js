import { StatusBar } from 'expo-status-bar';
import React, { useEffect, } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Modal, KeyboardAvoidingView, } from 'react-native';
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from './Colors';
import tempData from './tempData';
import TodoList from "./TodoList";
import { Button } from 'semantic-ui-react'
import TodoAddModel from "./TodoAddModel";


export default function HomePage() {
    const date = new Date()
    const [addTodoVisible, setaddTodoVisible] = useState(false)
    const [list, setlist] = useState(tempData)
    const [dat, setDate] = useState(date)
    let lengthOfTask = 0
    const leng = tempData.map(todo => {
        lengthOfTask += todo.todos.length
    })

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)

        return function () {
            clearInterval(timer)
        }
    }, [])

    const toogleAddModel = () => {
        return setaddTodoVisible(addTodoVisible => !addTodoVisible)
    }

    const renderTitle = list => {
        return <View>
            <TodoList list={list} updated={updateList} />
        </View>
    }

    const renderList = list => {
        return <View>
            <TodoAddModel list={list} />
        </View>
    }

    const addList = (list) => {
        const previousTodo = [...list]
        const todoToAdd = [{ ...list, id: list.length + 1, todos: [] }]
        setlist(previousTodo.concat(todoToAdd))
    }

    function updateList(liste) {
        setlist(list => list.map(item => {
            return item.id === liste.id ? liste : item
        }))
    }

    return (
        <KeyboardAvoidingView
            behavior="height"
            style={styles.container}>
            <View>

                <View>
                    <TouchableOpacity>
                        <AntDesign name="menuunfold" size={25} color={colors.white} style={{ position: "absolute", top: 15, right: 10 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>
                        Hello<Text style={{ fontWeight: "400", color: colors.blue }}> Jhon</Text>
                    </Text>
                </View>

                <View style={{ marginHorizontal: 20, marginBottom: 30 }}>
                    <Text style={{
                        color: colors.lightgray,
                        fontSize: 15,
                        fontWeight: "900"
                    }}>{dat.toDateString()} {dat.toLocaleTimeString()}</Text>
                </View>

                <View style={{ height: 150 }}>
                    <FlatList
                        data={list}
                        keyExtractor={item => item.name}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollIndicatorInsets
                        renderItem={({ item }) => renderTitle(item)}
                        keyboardShouldPersistTaps="always"
                    />
 
                </View>


                {/*<Modal animationType="slide" visible={addTodoVisible} onRequestClose={toogleAddModel}>*/}

                {/*  <AddlistTitle closeModel={toogleAddModel} addList={addList} />*/}
                {/*</Modal>*/}
                <View style={styles.todoContainer}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", paddingBottom: 20 }}>Tasks({lengthOfTask})</Text>
                    <FlatList
                        data={list}
                        keyExtractor={item => item.name}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => renderList(item)}
                    //keyboardShouldPersistTaps="always"
                    />
                </View>
                <Button circular icon='settings' />

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        //marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#100c38",
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        color: colors.white,
        marginHorizontal: 20,
        marginTop: 30

    },
    todoContainer: {
        width: "93%",
        aspectRatio: 0.70,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 15,
        marginHorizontal: 15,
        paddingHorizontal: 15,
        paddingVertical: 20,
        overflow: "hidden"
    },
    add: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 50,
        right: 10,
        height: 70,
        backgroundColor: '#ff9679',
        borderRadius: 100,
    }
});
