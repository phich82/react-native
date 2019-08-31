import React from 'react'
import { Text } from 'react-native';


const styles = {
    textStyles: {
        fontSize: 40,
        color: 'red'
    }
};

const Header = () => {
    return <Text style={ styles.textStyles }>Hello!</Text>
};

export default Header;
