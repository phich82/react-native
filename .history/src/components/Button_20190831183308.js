import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const styles = {
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    text: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

const Button = (props) => {
    const { onPress, children } = props;
	return (
        <TouchableOpacity style={ styles.container } onPress={ onPress }>
            <Text style={ styles.text }>{ children }</Text>
        </TouchableOpacity>
	);
};

export default Button;
