import React, { Component } from 'react';
import { Image } from 'react-native';

import { Card } from 'native-base';

const horizontalMargin = 20;
const slideWidth = 280;

const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

const styles = {
    slide: {
        width: itemWidth,
        height: itemHeight,
        marginTop: 10,
        marginBottom: 10,
    },
    slideInnerContainer: {
        width: null,
        flex: 1,
        height: null,
        resizeMode: 'cover',
    }
}

export default class FeaturedCard extends Component{
    render() {
        return(
            <Card
                bordered={false} 
                style={styles.slide}>
                    <Image 
                        style={styles.slideInnerContainer} 
                        source={{uri: this.props.imageUri}}
                        showSpinner={true}
                        />
            </Card>
        );
    }
}