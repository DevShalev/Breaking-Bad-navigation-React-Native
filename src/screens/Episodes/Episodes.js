import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image,StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';


import StyleMoran from '../../utility/appStyle.js';




const Episodes = props =>
{ 
    const [brbadData,setBrbadData]=useState([])
 
    const gettingData=async()=>{
    const Url = 'https://www.breakingbadapi.com/api/episodes';
    const response = await fetch(Url,{method: 'GET',});
    const dataRes= await response.json();
    setBrbadData(dataRes);
    }


 useEffect(()=>{gettingData()},[])
 console.log('Episodes '+ JSON.stringify(brbadData));
    return(
        <View style={StyleMoran.container}>
            <FlatList 
            data={brbadData}
            keyExtractor={item=>item.episode_id}
            renderItem={charData=>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Episode Details',{Details:charData.item})}}>
            <View style={{...StyleMoran.containerFlat,backgroundColor:'#095c2e',width:'99%'}}>
            
                <View style={{width:'100%', height:'100%',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',...StyleMoran.textFlat,padding:5}}>{charData.item.title}</Text>
                <Text style={{...StyleMoran.textFlat,fontSize:16,padding:5}}>Season: {charData.item.season} || Episode: {charData.item.episode}</Text>
                <Text style={{...StyleMoran.textFlat,fontSize:16,padding:5}}>air_date: {charData.item.air_date}</Text>
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
        headerTitle:'Episodes',
        headerTitleStyle:{color:'#fff'},
        headerTitleAlign:'center',
        headerStyle:{backgroundColor: '#095c2e'},
    }
}



export default Episodes;
