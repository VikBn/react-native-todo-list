import React from "react";
import { StyleSheet, View} from "react-native";

export const AppCard = props => {
    return (
        <View style={styles.default}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    default: {
        backgroundColor: '#fff',
        padding: 20,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: .3,
        shadowOffset: { width: 2, height: 2}
    }
});