import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

/**
 * Props->
 * width 
 * height
 * imageUri
 * title
 * resize
 * margin
 */

class ImageWithTitleCard extends Component {
    render() {
        return (
            <View style={{ width: this.props.width, marginLeft: this.props.margin, borderWidth: 0, borderColor: '#db9627' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{flex: 1, width: null, height: this.props.height, resizeMode: this.props.resize, borderRadius:3 }}
                    />
                </View>
                <View style={{ flex: 1, alignSelf: 'center', paddingTop: 5, marginBottom:0, borderRadius:3 }}>
                    <Text style={{fontWeight:'300', color:'black'}}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}
export default ImageWithTitleCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});