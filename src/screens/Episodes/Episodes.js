import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyleMoran from '../../utility/appStyle.js';

const Episodes = props =>
{ 

    return(
        <View style={StyleMoran.container}>
            <Text>
                episodes
            </Text>
        </View>
    )
    
}
export const screenOptions = navData => {
    
    
    return {
        headerTitle:'Episodes',
        
    }
}
export default Episodes;