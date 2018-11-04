import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{flexDirection:'column', width: 130, marginLeft: 10, borderWidth: 0, borderColor: '#db9627' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: 100, resizeMode: 'cover', borderRadius:3 }}
                    />
                </View>
                <View style={{ flex: 1, alignSelf: 'center', paddingTop: 10, marginBottom:10, borderRadius:3 }}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});