import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default
class App3 extends Component {

    componentWillMount() {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: 'AIzaSyDXRbYHzJmU4OKv9QpNUIVy5L875dTlUKI',
            authDomain: 'react-native-auth-a471b.firebaseapp.com',
            databaseURL: 'https://react-native-auth-a471b.firebaseio.com',
            projectId: 'react-native-auth-a471b',
            storageBucket: '',
            messagingSenderId: '93053041286',
            appId: '1:93053041286:web:adc9f5c0aa982217'
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <View style={ {flex: 1} }>
                <Header title="Albums"></Header>
                <LoginForm />
            </View>
        );
    }
}
