import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView} from 'react-native';

import StyleMoran from '../../utility/appStyle.js';

const EpisodeDetails = props =>
{ 
    const dataChar = (props.route.params.Details);

    console.log('Episode Details '+ JSON.stringify('season: '+ dataChar.season + '|| episode: '+dataChar.episode));
    return(
        <View style={{...StyleMoran.container,height:'100%',padding:0}}>
            <View style={{width: '100%', height: '35%',alignItems:'center',backgroundColor:'#133B19',justifyContent: 'center'}}>
                <Text style={{fontSize:30,fontWeight:'700',color:'#fff'}}>{dataChar.title}</Text>
            </View>
            <View style={{width: '100%', height: '10%',alignItems:'center',backgroundColor:'#095c2e',justifyContent: 'center',}}>
                <Text style={{fontSize:22,fontWeight:'500',color:'#fff'}}>Characters</Text>
            </View>
            
                <FlatList 
                data={dataChar.characters} 
                keyExtractor={item=>item}
                renderItem={chars=>
                    <Text style={{fontSize:18,padding:2,paddingLeft:20,fontWeight:'700'}}>{chars.item}</Text>
                }/>
            
        </View>
    )
    ;
}
export const screenOptions = navData => {
    
    
    return {
        headerTitle:'Season '+navData.route.params.Details.season + ' | Episode '+ navData.route.params.Details.episode,
        headerTitleStyle:{color:'#fff'},
        headerTitleAlign:'center',
        headerStyle:{backgroundColor: '#095c2e'},
        
    }
}
export default EpisodeDetails;