import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const styles = {
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

const Button = (props) => {
	return (
        <TouchableOpacity>
            <Text>Click Me!</Text>
        </TouchableOpacity>
	);
};

export default Button;
