/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

const App = () => {
    return (
        <Text>Some Text</Text>
    );
};
AppRegistry.registerComponent(appName, () => App);
