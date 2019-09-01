import React from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        flex: 1
    },
    label: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        flex: 1
    },
    input: {
        width: 250,
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        flex: 2
    }
};

const Input = ({ label, value, placeholder, type, onChangeText }) => (
    <View style={ styles.container }>
        <Text style={ styles.label }>{ label }</Text>
        <TextInput
            placeholder={ placeholder }
            style={ styles.input }
            value={ value }
            secureTextEntry={ type === 'password' }
            onChangeText={ onChangeText }
        />
    </View>
);

export { Input };
