import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyleMoran from '../../utility/appStyle.js';

const EpisodeDetails = props =>
{ 

    return(
        <View style={StyleMoran.container}>
            <Text>
                episode Details
            </Text>
        </View>
    )
    ;
}
export const screenOptions = navData => {
    
    
    return {
        headerTitle:'Episodes Details',
        
    }
}
export default EpisodeDetails;