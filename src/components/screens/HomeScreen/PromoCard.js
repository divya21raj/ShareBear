import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import { Card } from 'native-base';

// External Imports
import ProgressBar from 'react-native-progress/Bar';

const horizontalWidth = Dimensions.get('window').width;

export default class PromoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => Linking.openURL(this.props.url)}
      >
        <Card style={{width: 356, paddingLeft:0, height:200, marginStart:0, marginBottom:10}}>
          <Image  
              style={{flex:1, resizeMode: 'cover', width:null, height:null}}
              source={this.props.image}
              indicator={ProgressBar}
              indicatorProps={{
                size: 80,
                borderWidth: 0,
                color: '#ff8821',
                unfilledColor: 'rgba(200, 200, 200, 0.2)'
              }}
              />
        </Card>
      </TouchableOpacity>
    );
  }
}
