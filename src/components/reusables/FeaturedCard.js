import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { Card } from 'native-base';
import { withNavigation } from 'react-navigation';

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

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

class FeaturedCard extends Component{
    render() {
        const {item, navigation} = this.props;
        return(
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('ItemDetail', {'item': item})}
            >
                <Card
                    bordered={false} 
                    style={styles.slide}>
                        <Image 
                            style={styles.slideInnerContainer} 
                            source={{uri: item.imageUri}}
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

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(FeaturedCard);