import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default
class AlbumList extends Component {
    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        return (
            <View>
                <Text>Album List Here</Text>
            </View>
        )
    };
}
