import React, { Component } from 'react';
import {View, Image} from 'react-native';

import {Card, CardSection} from '../common';

export default class FeaturedCard extends Component{
    render() {
        return(
            <View style={{ height: 200, width: 300, marginLeft: 5, borderWidth: 0.5, borderColor: '#dddddd' }}>
                 <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:3 }}
                    />
            </View>
        );
    }
}