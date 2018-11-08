import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { Card } from 'native-base';
import { withNavigation } from 'react-navigation';

const horizontalMargin = 20;
const slideWidth = 280;

const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

const styles = {
    
}

class ItemCard extends Component{
    render() {
        const {item, navigation} = this.props;
        return(
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('ItemDetail', {'item': item})}
            >
            
            </TouchableOpacity>
        );
    }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(ItemCard);