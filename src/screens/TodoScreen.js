import React, {useState} from "react";
import {Button, Text, StyleSheet, View} from "react-native";
import {THEME} from "../theme";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({goBack, todo, onRemove}) => {
    const [modal, setModal] = useState(false)

    return (
        <View>
            <EditModal
                visible={modal}
                value={todo.title}
                onCancel={() => setModal(false)}
            />
            <AppCard>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Edit' onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color={THEME.GRAY_COLOR} style={styles.buttons} title='Back' onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button
                        color={THEME.DANGER_COLOR}
                        title='Remove'
                        onPress={()=> onRemove(todo.id)}/>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 26
    }
});