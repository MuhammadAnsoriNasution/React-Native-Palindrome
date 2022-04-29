import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonComp from '../components/ButtonComp';
import EmptyUser from '../components/EmptyUser';
import ProfileUser from '../components/ProfileUser';
import { RootStackParamList } from '../router';
import { RootState } from '../store';
import colors from '../utils/color';


export default function HomeScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<{ params: { name: string } }>>();
    const { profile } = useSelector((state: RootState) => state.user)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.username}>{route.params.name}</Text>
            <View style={styles.content}>
                {
                    profile ?
                        <ProfileUser
                            name={`${profile.first_name} ${profile.last_name}`}
                            email={profile.email}
                            uri={profile.avatar}
                            onPresWebsite={() => navigation.navigate("WebView", {})}
                        />
                        :
                        <EmptyUser />
                }

            </View>
            <ButtonComp
                label='Choose a user'
                onPress={() => { navigation.navigate("Users", {}) }}
                marginbottom={0}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    welcome: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 10,
        color: colors.dark,

    },
    username: {
        fontWeight: '600',
        fontSize: 18,
        color: colors.dark
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textEmpty: {
        fontWeight: '500',
        color: colors.secondary100,
        fontSize: 18,
        lineHeight: 36,
        marginTop: 20
    }
})