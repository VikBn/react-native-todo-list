import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([
        {
            id: '1',title: 'React Native',
        },
        {
            id: '2',title: 'React Native2',
        }
    ]);
    const addTodo = title => {
        const newTodo = {
            id: Date.now().toString(),
            title
        };

        setTodos(prev => [
            ...prev, newTodo
        ])
    };

    const goBack = () => setTodoId(null);

    const removeTodo = id => {
        const removesTodo = todos.find(item => item.id === id);
        Alert.alert(
            'Remove element',
            `Are you sure want to remove ${removesTodo.title}?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null);
                        setTodos(prev => prev.filter(item => item.id !==id))
                    }},
            ],
            {cancelable: false},
        );

    };
    let content = <MainScreen
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={todos}
        openTodo={setTodoId}
    />;

    if(todoId) {
        const selectedTodo = todos.find(item => item.id === todoId)
        content = <TodoScreen onRemove={removeTodo} goBack={goBack} todo={selectedTodo}/>
    }

    return (
        <View>
            <Navbar title='Todo app'/>
            <View style={styles.container}>
                { content }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 30
    },
});
