import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

export const Todo = ({todo, onRemove, onOpen}) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    };
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onOpen(todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    todo: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        color: 'red',
        flexDirection: 'row',
        marginBottom: 10,
        padding: 15
    }
});