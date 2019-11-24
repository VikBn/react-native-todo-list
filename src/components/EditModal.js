import React, {useState} from 'react';
import {View,TextInput, Button, StyleSheet, Alert, Modal} from "react-native";
import {THEME} from "../theme";

export const EditModal = ({visible, onCancel, value}) => {
    const [title, setTitle] = useState(value);
    const saveHandler = () => {
        if(title.trim().length < 3) {
            Alert.alert('Error', `Minimum 3 symbols length. Now is `)
        }
    };

    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setTitle}
                    maxLength={64}
                    style={styles.input}
                    placeholder='Insert Title'
                    value={title}
                />
                <Button title='Cancel' color={THEME.DANGER_COLOR} onPress={onCancel}/>
                <Button title='Save' onPress={}/>
            </View>
        </Modal>

    )
};

const styles = StyleSheet.create({
    wrap: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        spaceBetween: 'space-around'
    }
});