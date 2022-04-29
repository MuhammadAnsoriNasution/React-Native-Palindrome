import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { typeDatauser } from '../screens/UsersScreen';
import color from '../utils/color'
import ButtonComp from './ButtonComp'

type Props = {
    modalVisible: boolean,
    setModalVisible: (data: boolean) => void,
    onSelect: () => void,
    item: typeDatauser
}
export default function ShowProfile({ modalVisible, setModalVisible, onSelect, item }: Props) {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <TouchableOpacity style={{
                flex: 1,
                justifyContent: 'flex-end',
            }}
                activeOpacity={1}
                onPress={() => setModalVisible(!modalVisible)}
            >

                <View style={styles.contentModal}>
                    <Image source={{ uri: item?.avatar }} style={[styles.avatar, { width: 84, height: 84 }]} />
                    <Text style={styles.name}>{item?.first_name} {item?.last_name}</Text>
                    <ButtonComp
                        label='Select'
                        onPress={() => {
                            onSelect()
                        }}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    contentModal: {
        backgroundColor: color.white,
        paddingHorizontal: 32,
        paddingTop: 28,
        paddingBottom: 25,
        borderTopEndRadius: 16,
        borderTopLeftRadius: 16,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

    },
    name: {
        color: color.dark,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 33,
        marginTop: 15
    },
    avatar: {
        width: 49,
        height: 49,
        resizeMode: 'contain',
        borderRadius: 40,
        marginRight: 20
    },
})