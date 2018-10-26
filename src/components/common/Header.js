//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make component 
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}; 

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20,
        color: '#000',
        fontWeight: '400'
    }
};

//make it available to other parts
export {Header};
