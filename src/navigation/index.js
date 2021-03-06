import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StyleMoran from '../utility/appStyle.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CharDetails,{screenOptions as CharDetailsScreenOption}  from '../screens/Chars/CharDetails';
import Chars ,{screenOptions as CharsScreenOptions} from '../screens/Chars/index';
import Episodes ,{screenOptions as EpisodesScreenOptions} from '../screens/Episodes/Episodes';
import EpisodeDetails ,{screenOptions as EpisodeDetailsScreenOption} from '../screens/Episodes/EpisodeDetails';

import Quotes , {screenOptions as QuotesScreenOption} from '../screens/Quotes';


const CharsStackNavigator = createStackNavigator();
export const CharStack = () =>{
    return(
        <CharsStackNavigator.Navigator>
            <CharsStackNavigator.Screen name='Chars' component={Chars} options={CharsScreenOptions}/>
            <CharsStackNavigator.Screen name='CharsDetails' component={CharDetails} options={CharDetailsScreenOption}/>
        </CharsStackNavigator.Navigator>
    )
}

const EpisodesStackNavigator = createStackNavigator();
export const EpisodeStack=()=>{
    return(
    <EpisodesStackNavigator.Navigator>
        <EpisodesStackNavigator.Screen name='Episodes' component={Episodes} options={EpisodesScreenOptions}/>
        <EpisodesStackNavigator.Screen name='Episode Details' component={EpisodeDetails} options={EpisodeDetailsScreenOption}/>
    </EpisodesStackNavigator.Navigator>)
}

const QuotesStackNavigator = createStackNavigator();
export const QuotesStack = () =>{
    return(
    <QuotesStackNavigator.Navigator>
        <QuotesStackNavigator.Screen name='Quotes' component={Quotes} options={QuotesScreenOption}/>
    </QuotesStackNavigator.Navigator>)
}



const AppBottomBarNavigator = createMaterialBottomTabNavigator();
export const AppBottomBar =()=>{
    return(
    <AppBottomBarNavigator.Navigator shifting={true} labeled={true} activeColor='#095c2e'
    inactiveColor="#fff"
    barStyle={{backgroundColor: 'transparent'}}>
        <AppBottomBarNavigator.Screen  options={{tabBarIcon:({})=>{return( <Ionicons name='people' size={26} color='#095c2e'/>)}}} name="Characters" component={CharStack}/>
        <AppBottomBarNavigator.Screen options={{tabBarIcon:({})=>{return( <MaterialCommunityIcons name='clipboard-play' size={26} color='#095c2e'/> )}}} name="Episode" component={EpisodeStack}/>
        <AppBottomBarNavigator.Screen options={{tabBarIcon:({})=>{return( <MaterialCommunityIcons name='comment-quote' size={26} color='#095c2e'/> )}}} name="Quote" component={QuotesStack} />
    </AppBottomBarNavigator.Navigator>
    )};

    
