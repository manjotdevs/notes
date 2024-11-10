import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import useTheme from "../hook/theme";

const Setting: React.FC = () => {
    const {colors} = useTheme()
    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Text>hi</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        height: 20,
        width: 20,
        padding: 20,
        borderRadius: 10,

    }
});

export default Setting;
