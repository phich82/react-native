import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const styles = {
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
        flexDirection: 'row'
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
