import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { typeDatauser } from '../screens/UsersScreen';
import colors from '../utils/color';

type Props = {
    item: typeDatauser,
    onPress: () => void
}
export default function ItemUser({ item, onPress }: Props) {
    return (
        <Pressable style={styles.containerItem}
            onPress={() => onPress()}
            android_ripple={{
                color: colors.secondary100
            }}
        >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
                <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: colors.white100,
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 18
    },
    avatar: {
        width: 49,
        height: 49,
        resizeMode: 'contain',
        borderRadius: 40,
        marginRight: 20
    },
    name: {
        color: colors.dark,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24
    },
    email: {
        color: colors.secondary,
        lineHeight: 15,
        fontWeight: '500',
        fontSize: 10,
        textTransform: "uppercase",
        marginTop: 4
    }
})