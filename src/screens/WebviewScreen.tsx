import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import env from '../../env';
import colors from '../utils/color';

export default function WebviewScreen() {

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <WebView
                source={{ uri: env.webViewUri }}
            />
        </>
    );
}
