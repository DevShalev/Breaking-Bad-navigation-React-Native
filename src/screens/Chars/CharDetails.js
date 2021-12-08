import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyleMoran from '../../utility/appStyle.js';

const CharDetails = props =>
{ 

    return(
        <View style={StyleMoran.container}>
            <Text>
                chars details
            </Text>
        </View>
    )
    ;
}
export const screenOptions = navData => {
    
    
    return {
        headerTitle:'Char Details',
        
    }
}
export default CharDetails;

