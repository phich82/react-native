import React from 'react';
import { Text } from 'react-native';

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
		<Text>Click Me!</Text>
	);
};

export default Button;