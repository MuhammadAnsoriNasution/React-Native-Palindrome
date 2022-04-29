import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Screen from "../screens";
import colors from '../utils/color';


const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Home: { name: string },
    WebView: {},
    Login: {},
    Users: {}
}

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Screen.LoginScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Home" component={Screen.HomeScreen} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: colors.primary
                    }
                }} />
                <Stack.Screen name="WebView" component={Screen.WebviewScreen} options={{
                    headerTitle: ''
                }} />
                <Stack.Screen name="Users" component={Screen.UsersScreen} options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: colors.primary
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}