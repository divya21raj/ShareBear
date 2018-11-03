import React, { Component } from 'react';

import { Image, Animated, View } from 'react-native';

export default class ProgressiveImage extends Component {
  
  constructor(props) {
    super(props);
    this.state = { thumbnailOpacity: new Animated.Value(0) };
  }

  onLoad() {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 0,
      duration: 250
    }).start();
  }

  onThumbnailLoad() {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 1,
      duration: 250
    }).start();
  }

  render() {
    console.log(this.state);
    return (
      <View
        width={this.props.style.width}
        height={this.props.style.height}
        backgroundColor={'#CCC'}
      >
        <Animated.Image 
          style={this.props.style}
          source={this.props.source}
          onLoad={this.onLoad.bind(this)} />
        <Animated.Image 
          resizeMode={'contain'}
          key={this.props.key} 
          style={[
            {
              opacity: this.state.thumbnailOpacity
            }, 
            this.props.style
          ]}
          source={this.props.thumbnail}
          onLoad={this.onThumbnailLoad.bind(this)} />
      </View>      
    )
  }
}