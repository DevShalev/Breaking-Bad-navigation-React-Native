import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image,StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';


import StyleMoran from '../../utility/appStyle.js';




const Chars = props =>
{ 
    const [brbadData,setBrbadData]=useState([])
 
const gettingData=async()=>{
    const Url = 'https://www.breakingbadapi.com/api/characters';
    const response = await fetch(Url,{method: 'GET',});
    const dataRes= await response.json();
    setBrbadData(dataRes);              
}
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

 useEffect(()=>{gettingData()},[])
 console.log('Characters '+JSON.stringify(brbadData));
    return(
        <View style={StyleMoran.container}>
            <FlatList 
            data={brbadData}
            keyExtractor={item=>item.char_id}
            renderItem={charData=>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('CharsDetails',{Details:charData.item})}}>
            <View style={{...StyleMoran.containerFlat,}}>
            
                <View style={{width:'100%', height:'100%',flexDirection:'row-reverse',alignContent:'center'}}>
                <Image style={StyleMoran.imageFlat} fadeDuration={2000} source={{uri:charData.item.img}}/>
                <View style={{backgroundColor:DeathStatus(charData.item),height:'100%',width:'2%'}}></View>
                
                <View style={{flex:1,padding:20,}}>
                <Text style={{color:'#fff',...StyleMoran.textFlat}}>{charData.item.name}</Text>
                <Text style={{...StyleMoran.textFlat,fontSize:16,}}>{charData.item.nickname}</Text></View>
                
                </View>
                </View>
                
                
            </TouchableOpacity>
            }
            
            />
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

