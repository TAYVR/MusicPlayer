import React, { Component, createContext } from 'react';
import { Text, View, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Badge } from 'react-native-elements';
import { DataProvider } from 'recyclerlistview';


export const AudioContext = createContext()

export class AudioProvieder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            audioFiles: [],
            permissionError: false,
            dataProvider: new DataProvider((r1, r2) => r1 !== r2)

        }
    }

    permissionAllert = () => {
        Alert.alert('accepte lah yrdi 3lik', "ghir bach ntala3 lik dyask"
            , [{
                text: "sir 3lah",
                onPress: () => this.getPermissions()
            }, {
                text: "la wtgoool",
                onPress: () => this.permissionAllert()
            }])
    }


    getAudioFiles = async () => {

        const { dataProvider, audioFiles } = this.state
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',

        })

        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: media.totalCount,
        })

        this.setState({ ...this.state, dataProvider: dataProvider.cloneWithRows([...audioFiles, ...media.assets]), audioFiles: [...audioFiles,media.assets] })
    }

    getPermissions = async () => {
        // {"canAskAgain": true,
        // "expires": "never", 
        // "granted": false, 
        // "status": "undetermined"}
        const permission = await MediaLibrary.getPermissionsAsync()
        if (permission.granted) {
            //accept
            this.getAudioFiles()
        }

        if (!permission.canAskAgain && !permission.granted) {
            this.setState({ ...this.state, permissionError: true })

        }


        if (!permission.granted && permission.canAskAgain) {
            const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync()
            if (status == 'denied' && canAskAgain) {
                // display alrert allow permission
                this.permissionAllert()
            }
            if (status == 'granted') {
                // want get all audio files
                this.getAudioFiles()

            }
            if (status == 'granted' && !canAskAgain) {
                // want get  display error
                this.setState({ ...this.state, permissionError: true })

            }


        }
    }

    componentDidMount() {
        this.getPermissions()
    }

    render() {
        const {audioFiles,dataProvider,permissionError}=this.state

        if (permissionError) {
            return (
                <View>
                    <Text>nta ma acceptitich ach gha ndir lik</Text>
                    <Badge
                        badgeStyle={{}}
                        containerStyle={{}}
                        onPress={() => {
                            alert("onPress");
                        }}
                        status="danger"
                        textProps={{}}
                        textStyle={{ color: "#EFE" }}
                        value="Hello "
                        options={{}}
                    />
                </View>
            )
        }
        return (
            <AudioContext.Provider value={{ audioFiles,dataProvider }}>
                {this.props.children}
            </AudioContext.Provider>
        );
    }
}

export default AudioProvieder;

