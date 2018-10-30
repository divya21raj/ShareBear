import React, { Component } from 'react';
import {View, Image} from 'react-native';

import {Card } from 'native-base';

export default class FeaturedCard extends Component{
    render() {
        return(
            <Card style={{ height: 200, width: 300, marginLeft: 5 }}>
                 <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius:3 }}
                    />
            </Card>
        );
    }
}