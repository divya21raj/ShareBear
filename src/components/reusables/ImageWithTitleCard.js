import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

/**
 * Props->
 * item-{
 * width 
 * height
 * imageUri
 * title
 * margin
 * resize
 * }
 * onPress
 */

class ImageWithTitleCard extends Component{
    render() {
        const {item, navigation, onPress} = this.props;
    return (
        <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
            >
            <View style={{ width: item.width, marginLeft: item.margin, borderWidth: 0, borderColor: '#db9627' }}>
                <View style={{ flex: 2 }}>
                    <Image source={item.thumbnail}
                        style={{flex: 1, width: null, height: item.height, resizeMode: item.resizeMode, borderRadius:3 }}
                    />
                </View>
                <View style={{ flex: 1, alignSelf: 'center', paddingTop: 5, marginBottom:0, borderRadius:3 }}>
                    <Text style={{fontWeight:'300', color:'black'}}>{item.title}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(ImageWithTitleCard);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});