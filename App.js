import { StatusBar } from 'expo-status-bar';
import React ,{useEffect,useState} from 'react';
import { StyleSheet, Image ,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomBar } from './src/navigation';
import StyleMoran from './src/utility/appStyle';



export default function App() {
  
  
  return (
    
    <NavigationContainer>
      <Image style={StyleMoran.imageHead} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/554px-Breaking_Bad_logo.svg.png'}} />
      
      <AppBottomBar/>
    </NavigationContainer>
  );
  
}


