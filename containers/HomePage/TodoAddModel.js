import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    LayoutAnimation,
    Keyboard,
    Dimensions,
    PanResponder,
    Easing,
    Animated,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "./Colors"
import { Swipeable } from "react-native-gesture-handler"


function TodoAddModel(props) {
    const list = props.list
    const [newTodo, setTodo] = useState("");
    const [swiping, setSwiping] = useState(false)
    const completedCount = list.todos.filter(todo => todo.completed).length;
    const taskCount = list.todos.length

    const toogleTodoCompleted = (index) => {
        let liste = props.list
        list.todos[index].completed = !list.todos[index].completed
        props.updatelist(liste)
    }


    function rightActions(dragX, index) {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0.9],
            extrapolate: "clamp",
        })
        const opacity = dragX.interpolate({
            inputRange: [-100, -20, 0],
            outputRange: [1, 0.9, 0],
            extrapolate: "clamp",
        })
        return <TouchableOpacity>
            <Animated.View style={[styles.deleteButton, { opacity: opacity }]}>
                <Animated.Text style={{ color: colors.white, fontWeight: "bold", transform: [{ scale }] }}>Delete</Animated.Text>
            </Animated.View>
        </TouchableOpacity>;
    }

    const renderTodo = (todo, index) => {
        return <Swipeable
            renderRightActions={(_, dragX) => rightActions(dragX, index)}
        >
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => toogleTodoCompleted(index)}>
                    <Ionicons name={todo.completed ? "checkmark-circle-outline" : "ellipse-outline"} size={24}
                        color={todo.completed ? colors.black : list.color} style={{ width: 32 }} />
                </TouchableOpacity>
                <Text style={[styles.todo, {
                    textDecorationLine: todo.completed ? "line-through" : "none",
                    color: todo.completed ? colors.black : colors.gray
                }]}>{todo.title}</Text>

            </View>
            <View style={{
                height: 2,
                width: "80%",
                alignSelf: "center",
                opacity: 0.2,
                backgroundColor: 'whitesmoke'
            }}>

            </View>
        </Swipeable>
    }

    const addTodo = () => {
        let list = props.list
        list.todos.push({ title: newTodo, completed: false })

        props.updatelist(list)
        setTodo(toto => "")
        Keyboard.dismiss()
    }


    return (
        // <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={[styles.section]}>
            <FlatList data={list.todos}
                renderItem={({ item, index }) => renderTodo(item, index)}
                keyExtractor={item => item.title}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        //alignItems: "center",
        backgroundColor: colors.backgroundColor,
    },
    // section: {
    //     alignItems: "flex-start",
    // },
    header: {
        justifyContent: "flex-start",
        marginLeft: "10%",
        borderBottomWidth: 4
    },
    title: {
        fontSize: 50,
        fontWeight: "700",
        color: colors.lightBlue,
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 10,
        fontWeight: "700",
        color: colors.lightgray
    },
    todoContainer: {
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        width: "90%"
    }, deleteButton: {
        flex: 1,
        backgroundColor: "red",
        width: 80,
        justifyContent: "center",
        alignItems: "center"
    }

})

export default TodoAddModel;