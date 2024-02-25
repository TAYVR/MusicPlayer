import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Player = () => {
    return (
       <View style={style.container}>
        <Text>Player</Text>
       </View>
    );


}
const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    }
})

export default Player;

