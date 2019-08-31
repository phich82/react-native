import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default
class AlbumList extends Component {
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        debugger;
    }

    render() {
        return (
            <View>
                <Text>Album List Here</Text>
            </View>
        )
    };
}
