import React, { useState } from 'react';
import { Alert, Image, ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import imagesAssets from '../assets/images';
import ButtonComp from '../components/ButtonComp';
import TextInputComp from '../components/TextInputComp';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: { name: string }
}

export default function LoginScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [name, setname] = useState<string>('')
    const [palindrom, setPalindrom] = useState<string>('')

    const isPalinDrom = () => {
        let reverse = palindrom.split('').reverse().join('')
        if (reverse == palindrom) {
            return true
        } else {
            return false

        }
    }
    const checkPalindrom = () => {
        const res = isPalinDrom();
        if (res) {
            Alert.alert('Success', 'isPalinDrom')
        } else {
            Alert.alert('Fail', 'not palindrome')

        }
    }
    const handleNext = () => {
        if (name.length > 6) {
            const res = isPalinDrom();
            if (res) {
                navigation.replace("Home", { name: name })
            } else {
                Alert.alert('Fail', 'not palindrome')
            }
        } else {
            Alert.alert('Fail', 'name is required')
        }
    }
    return (
        <ImageBackground
            resizeMode="cover"
            source={imagesAssets.backgroundLogin} style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <View style={styles.wrapContent}>
                <Image
                    source={imagesAssets.iconAddUserCircle}
                    style={{
                        resizeMode: "contain",
                        width: 116,
                        height: 116,
                        marginBottom: 58,
                        alignSelf: 'center',
                    }}
                />
                <TextInputComp
                    placeHolder='Name'
                    value={name}
                    onChange={setname}
                    marginBottom={22}
                />
                <TextInputComp
                    placeHolder='Palindrome'
                    value={palindrom}
                    onChange={setPalindrom}
                    marginBottom={45}
                />
                <ButtonComp
                    label='CHECK'
                    onPress={checkPalindrom}
                    marginbottom={15}
                />
                <ButtonComp
                    label='NEXT'
                    onPress={handleNext}
                />
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    wrapContent: {
        paddingHorizontal: 32
    }
})