/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Header from './src/components/header.js';

const App2 = () => (
    <Header title="Albums"></Header>
);

AppRegistry.registerComponent(appName, () => App2);
