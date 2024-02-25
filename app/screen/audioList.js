import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { AudioContext } from '../context/audioProvieder';
import { RecyclerListView, LayoutProvider } from 'recyclerlistview';
import AudioListItem from './components/audioListItem';





class AudioList extends Component {
    static contextType = AudioContext

    layoutProvider = new LayoutProvider(
        i => 'audio',
        (type, dim) => {
            switch (type) {
                case 'audio':
                    dim.width = Dimensions.get('window').width
                    dim.height = 70;
                    break
                default:
                    dim.width = 0
                    dim.height = 0;
            }

        })

    rowRenderer = (type, item) => {
        return <AudioListItem title={item.filename} duration={item.duration} />
    }
    render() {

        return (
            <AudioContext.Consumer>
                {({ dataProvider }) => {
                    return (
                        
                        <View style={{ flex: 1 }}>
                            <RecyclerListView
                                dataProvider={dataProvider}
                                layoutProvider={this.layoutProvider}
                                rowRenderer={this.rowRenderer} />
                        </View>
                    )
                }}
            </AudioContext.Consumer>

            // <ScrollView>
            //     {this.context.audioFiles.map(item => {
            //         return <CardList key={item.id} audio={item} />
            //     })}


            // </ScrollView>
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default AudioList;
