import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import imagesAssets from '../assets/images';
import colors from '../utils/color';


type Props = {
    name: string,
    email: string,
    onPresWebsite: () => void,
    uri: string
}
export default function ProfileUser({ email, name, onPresWebsite, uri }: Props) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: uri }} style={styles.image} />
            <View style={styles.infoUser}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
                <TouchableOpacity onPress={() => onPresWebsite()}>
                    <Text style={[styles.email, { textDecorationLine: "underline", color: colors.primary }]}>Website</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    infoUser: {
        marginTop: 53,
        alignItems: 'center'
    },
    email: {
        lineHeight: 34,
        marginTop: 8,
        fontWeight: '500',
        fontSize: 18,

    },
    image: {
        width: 164,
        height: 164,
        resizeMode: 'contain',
        borderRadius: 164,
        alignSelf: 'center'
    },
    name: {
        color: colors.secondary200,
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 34
    }
})