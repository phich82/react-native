/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

const App2 = () => (
    <Text>Some Text</Text>
);

AppRegistry.registerComponent(appName, () => App2);
