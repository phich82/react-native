import React from 'react';
import { View } from 'react-native';

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

const CardItem = (props) => {
	return (
		<View style={styles.container}>{ props.children }</View>
	);
};

export default CardItem;
