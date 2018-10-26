import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.containerStyle}>
            
            <Text style={styles.labelStyle}>
                {label}
            </Text>

            <TextInput
            style={styles.inputStyle}
            value={value}
            onChangeText={onChangeText}
            autoCorrect={false}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 15,
        flex: 1
    },

    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export { Input };