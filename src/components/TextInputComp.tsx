import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../utils/color';

type Props = {
    value: string,
    onChange: (e: string) => void,
    placeHolder: string,
    marginBottom: number
}
TextInputComp.defaultProps = {
    marginBottom: 0
}


export default function TextInputComp({ value, onChange, placeHolder, marginBottom }: Props) {
    return (
        <View style={[styles.container, { marginBottom: marginBottom }]}>
            <TextInput
                style={[styles.input,]}
                placeholder={placeHolder}
                value={value}
                onChangeText={(e) => onChange(e)}
                placeholderTextColor={'rgba(104, 103, 119, 0.36)'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingVertical: 10,
        paddingRight: 16,
        paddingLeft: 20,
        borderRadius: 12,
    },
    input: {
        fontSize: 16,
        color: colors.secondary,
        fontWeight: "500",
        paddingVertical: 0
    }
})