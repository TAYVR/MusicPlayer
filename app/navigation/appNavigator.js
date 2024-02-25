import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AudioList from '../screen/audioList';
import Player from '../screen/player';
import PlayList from '../screen/playList';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Tab=createBottomTabNavigator();
const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Audio List" component={AudioList} options={{
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name="headphones-alt" size={size} color={color} />
                ),
                }} />


            <Tab.Screen name="Player" component={Player} options={{
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name="compact-disc" size={size} color={color} />
                ),
                }}  />


            <Tab.Screen name="Play List" component={PlayList} options={{
                tabBarIcon:({color,size})=>(
                    <MaterialIcons name="library-music" size={size} color={color} />
                ),
                }}  />
        </Tab.Navigator>
    );
}

export default AppNavigator;
