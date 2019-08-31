import React from 'react'
import { Text, View } from 'react-native';


const styles = {
    textStyles: {
        fontSize: 40,
        color: 'red'
    },
    viewStyle: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    }
};

const Header = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={ styles.textStyles }>Hello!</Text>
        </View>
    );
};

export default Header;
