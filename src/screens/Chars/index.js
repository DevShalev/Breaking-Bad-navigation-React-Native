import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyleMoran from '../../utility/appStyle.js';

const Chars = props =>
{ 

    return(
        <View style={StyleMoran.container}>
            <Text>
            chars
            </Text>
        </View>
    )
    ;
}
export const screenOptions = navData => {
    
    
    return {
        headerTitle:'Character',
        headerTitleStyle:{color:'#fff'},
        headerTitleAlign:'center',
        headerStyle:{backgroundColor: '#095c2e'},
        
        
    }
}
export default Chars;