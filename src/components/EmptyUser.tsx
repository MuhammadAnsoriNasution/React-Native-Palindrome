import React from 'react';
import { View, Text, Image } from 'react-native';
import imagesAssets from '../assets/images';
import colors from '../utils/color';

export default function EmptyUser() {
    return (
        <View>
            <Image source={imagesAssets.userDefualt} style={{
                width: 164,
                height: 164,
                resizeMode: 'center',
                alignSelf: 'center'
            }} />
            <Text style={{
                fontWeight: '500',
                color: colors.secondary100,
                fontSize: 18,
                lineHeight: 36,
                marginTop: 20
            }}>Select a user to show the profile</Text>
        </View>
    );
}
