import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {Card} from 'native-base';

import FeaturedCard from '../../reusables/FeaturedCard';    

export default class FeaturedView extends Component {
    render() {
        return(
            <Card style={{paddingBottom:10, marginStart:5, marginEnd:5}}>
                <Text style={{ fontSize: 16, fontWeight: '100', marginTop: 5, paddingHorizontal: 15, color: 'grey' }}>
                    Featured
                </Text>
                
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 5 }}
                >
                    <FeaturedCard imageUri={require('../../../assets/bs.jpg')} />
                    <FeaturedCard imageUri={require('../../../assets/mal.jpg')} />
                    <FeaturedCard imageUri={require('../../../assets/sr.jpg')} />
                    <FeaturedCard imageUri={require('../../../assets/sn.png')} />
                    <FeaturedCard imageUri={require('../../../assets/venom.jpeg')} />
                    <FeaturedCard imageUri={require('../../../assets/inc.jpg')} />
                </ScrollView>
            </Card>
        );
    }
}