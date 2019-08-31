import React from 'react'
import { Text, View } from 'react-native';


const styles = {
    textStyles: {
        fontSize: 40,
        color: 'red'
    },
    viewStyle: {
        backgroundColor: 'yellow'
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
