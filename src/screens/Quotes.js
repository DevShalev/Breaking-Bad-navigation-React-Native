import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyleMoran from '../utility/appStyle.js';

const Quotes = props =>
{ 

    return(
        <View style={StyleMoran.container}>
            <Text>
                quotes
            </Text>
        </View>
    )
    ;
}
export const screenOptions = navData => {
    
    
    return {
        headerTitle:'Quotes',
        
    }
}
export default Quotes;