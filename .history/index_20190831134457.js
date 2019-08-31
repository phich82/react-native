/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Header from './src/components/header.component';
import AlbumList from './src/components/album-list.component';

const App2 = () => (
    <Header title="Albums"></Header>
    <AlbumList></AlbumList>
);

AppRegistry.registerComponent(appName, () => App2);
