import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// External Library Imports
import {Card} from 'native-base';

// Local Imports
import ImageWithTitleCard from '../../reusables/ImageWithTitleCard.js';

export default class RecommendedView extends Component {
    
    state = { items: [
        {
            title: 'Black Sails',
            thumbnail: require('../../../assets/bs.jpg'),
            height: 100,
            margin: 10,
            width: 130,
        },
        {
            title: 'WWE 2k18',
            thumbnail: require('../../../assets/sr.jpg'),
            height: 100,
            margin: 10,
            width: 130,
        },
        {
            title: 'Supernatural',
            thumbnail: require('../../../assets/sn.png'),
            height: 100,
            margin: 10,
            width: 130,
        },
        {
            title: 'Maleficent',
            thumbnail: require('../../../assets/mal.jpg'),
            height: 100,
            margin: 10,
            width: 130,
        },
        {
            title: 'Resturant',
            thumbnail: require('../../../assets/restaurant.jpg'),
            height: 100,
            margin: 10,
            width: 130,
        },
        {
            title: 'Venom',
            thumbnail: require('../../../assets/venom.jpeg'),
            height: 100,
            margin: 10,
            width: 130,
        }
    ]};

    renderItems() {
        return this.state.items.map((item) => {
        return (
            <ImageWithTitleCard 
                    key={item.title}
                    item={item}
                />
        );
        });
    }
    
    render() {
        return(
            <View style={{marginTop:5, marginBottom:10}}>
                <Text style={{ fontSize: 14, fontWeight: '100', paddingHorizontal: 10, color: '#db9627' }}>
                    Recommended For You >
                </Text>
                <Card style={{padding:1, margin:2,paddingBottom:10,}}>
                    <View style={{ marginTop: 10 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                        {this.renderItems()}
                        </ScrollView>
                    </View>
                </Card>
            </View>
        );
    }
}