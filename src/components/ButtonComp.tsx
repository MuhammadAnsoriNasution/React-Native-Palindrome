import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../utils/color';

type Props = {
    onPress: () => void,
    label: string,
    marginbottom: number
}
ButtonComp.defaultProps = {
    marginbottom: 0
}
export default function ButtonComp({ onPress, label, marginbottom }: Props) {

    return (
        <View style={[styles.container, { marginBottom: marginbottom }]}>
            <Pressable
                android_ripple={{
                    color: colors.white
                }}
                style={[styles.pressable]}
                onPress={() => onPress()}
            >
                <Text style={styles.label}>{label}</Text>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({
    pressable: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: colors.primary,

    },
    container: {
        borderRadius: 12,
        overflow: 'hidden',
        width: '100%'
    },
    label: {
        color: colors.white
    }
})