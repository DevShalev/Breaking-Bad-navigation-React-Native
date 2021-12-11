import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList,StyleSheet, Text, View ,Image} from 'react-native';

import StyleMoran from '../../utility/appStyle.js';



    


const CharDetails = props =>
{ 
    const DeathStatus=(props)=>{
        let colorStatus= props.status;
        let colorS;
            switch(colorStatus){
                case 'Presumed dead':
                return('#FFC300')
            
                case 'Alive':
                return('#1BBD22')
            
                case 'Deceased':
                return('#5E635E')
            
                default:
                return('#f33')
            }
    }

    const dataChar = (props.route.params.Details);
    console.log('Char Details ' + JSON.stringify(dataChar.name));
    return(
        <View style={{flexDirection:'column',alignItems:'center',height:'100%',backgroundColor:'#095c2e'}}>
            
            <View style={{width:'100%',height:'60%',}}>
            <Image style={{borderWidth:5,borderColor:DeathStatus(dataChar),width:'40%',height:'65%',resizeMode:'stretch',alignSelf:'center',marginTop:10}}  source={{uri:dataChar.img} } fadeDuration={3000} />
            
            <View style={{alignItems:'center',margin:20}}>
            <Text style={{color:'#fff',fontSize:20}}>Name: {dataChar.name}</Text>
            <Text style={{color:'#fff',fontSize:18}}>Nick Name: {dataChar.nickname}</Text>
            <Text style={{color:DeathStatus(dataChar),fontSize:18}}>Status: {dataChar.status}</Text>
            <Text style={{color:'#fff',fontSize:18}}>Birthday: {dataChar.birthday}</Text>
            <Text style={{color:'#fff',fontSize:18}}>Portrayed: {dataChar.portrayed}</Text>
            <Text style={{color:'#fff',fontSize:18}}>Appearance: {dataChar.appearance+','}</Text>
            
            
            
            </View></View>
            
            
        </View>
    )
    ;
}
export const screenOptions = navData => {
    
    
    return {
        headerTitle:navData.route.params.Details.name,
        headerTitleStyle:{color:'#fff'},
        headerTitleAlign:'center',
        headerStyle:{backgroundColor: '#095c2e'},
        
    }
}
export default CharDetails;

