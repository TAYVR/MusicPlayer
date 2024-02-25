import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const PlayList = () => {
    return (
       <View style={style.container}>
        <Text>Play List</Text>
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

export default PlayList;
