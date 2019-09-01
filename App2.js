import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App2 = () => (
    <View style={ {flex: 1} }>
        <Header title="Albums"></Header>
        <AlbumList></AlbumList>
    </View>
);

export default App2;
