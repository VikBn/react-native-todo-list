import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Todo} from "../components/Todo";
import {AddTodo} from "../components/AddTodo";

export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => (
                    <Todo
                        onOpen={openTodo}
                        onRemove={removeTodo}
                        todo={item}
                    />
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({

});