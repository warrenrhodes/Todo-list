import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import Colors from "./Colors";
import ProgressBar from "./progressBar";


function TodoList(props) {
    const list = props.list
    const [visible, setVisible] = useState(false)
    const toogleListModel = () => setVisible(!visible)

    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remaining = list.todos.length - completedCount;

    return (
        <View >
            {/*<Modal animationType="slide" visible={visible} onRequestClose={toogleListModel}>*/}
            {/*    <TodoAddModel list= {list} closeModel={toogleListModel} />*/}
            {/*</Modal>*/}
            <TouchableOpacity style={[styles.listContainer, { backgroundColor: list.color }]} onPress={toogleListModel}>
                <Text style={styles.listTistle}>{list.name}</Text>

                <View>

                    <View style={{flexDirection: "row", position:"absolute",top: 10}}>
                        <Text style={styles.count}>{completedCount}/ {list.todos.length} </Text>
                        <Text style={styles.subtitle}>Tasks</Text>
                    </View>
                    <View style={{position: 'absolute', top: 40}}>
                    <ProgressBar bgcolor="black" progress={completedCount*100/list.todos.length} height={10}/>
                    </View>
                  {/*  <View style={{ alignItems: "center" }}>
                        <Text style={styles.count}>{remaining}</Text>
                        <Text style={styles.subtitle}>Completed</Text>
                    </View>*/}

                    <View style={{ position:"absolute",top: 20}}>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 16,
        marginHorizontal: 12,
        alignItems: "flex-start",
        height: 120,
        width: 150,
    },
    listTistle: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.white,
        marginBottom: 18
    },
    count: {
        fontWeight: "900",
        fontSize: 15,
        color: Colors.blue,
        marginRight:5
    },
    subtitle: {
        fontSize: 15,
        color: Colors.white
    }

})

export default TodoList