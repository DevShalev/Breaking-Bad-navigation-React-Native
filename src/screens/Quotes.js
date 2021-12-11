import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

import StyleMoran from '../utility/appStyle.js';

const Quotes = props =>
{ 
    const [brbadData,setBrbadData]=useState([])
 
    const gettingData=async()=>{
    const Url = 'https://www.breakingbadapi.com/api/quotes';
    const response = await fetch(Url,{method: 'GET',});
    const dataRes= await response.json();
    setBrbadData(dataRes);
    }

    useEffect(()=>{gettingData()},[])
    console.log('qoutes '+ JSON.stringify(brbadData));
    return(
        <View style={{...StyleMoran.container}}>
            <FlatList 
            data={brbadData}
            keyExtractor={item=>item.quote_id}
            renderItem={charData=>
            
            <View style={{...StyleMoran.containerFlat,backgroundColor:'#095c2e',width:'99%'}}>
                
                <View style={{width:'100%', height:'100%',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',...StyleMoran.textFlat,padding:5}}>{charData.item.quote}</Text>
                <Text style={{...StyleMoran.textFlat,fontSize:14,padding:5,fontWeight:'500'}}>{charData.item.author}</Text>
                </View>
                </View>

            }
            
            />
        </View>
    )
    ;
}
export const screenOptions = navData => {
    
    
    return {
        headerTitle:'Quotes',
        headerTitleStyle:{color:'#fff'},
        headerTitleAlign:'center',
        headerStyle:{backgroundColor: '#095c2e'},
        
    }
}
export default Quotes;