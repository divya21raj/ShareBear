import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// External Library Imports
import {Card} from 'native-base';

// Local Imports
import ImageWithTitleCard from '../../reusables/ImageWithTitleCard.js';

export default class RecommendedView extends Component {
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
                            <ImageWithTitleCard 
                                imageUri={require('../../../assets/bs.jpg')}
                                title="Black Sails"
                                height={100}
                                margin={10}
                                width={130}
                            />
                            <ImageWithTitleCard 
                                imageUri={require('../../../assets/sr.jpg')}
                                title="WWE 2k18"
                                height={100}
                                margin={10}
                                width={130}
                            />
                            <ImageWithTitleCard 
                                imageUri={require('../../../assets/sn.png')}
                                title="Supernatural"
                                height={100}
                                margin={10}
                                width={130}
                            />
                            <ImageWithTitleCard 
                                imageUri={require('../../../assets/mal.jpg')}
                                title="Maleficent"
                                height={100}
                                margin={10}
                                width={130}
                            />
                            <ImageWithTitleCard 
                                imageUri={require('../../../assets/restaurant.jpg')}
                                title="Resturant"
                                height={100}
                                margin={10}
                                width={130}
                            />
                            <ImageWithTitleCard 
                                imageUri={require('../../../assets/venom.jpeg')}
                                title="Venom"
                                height={100}
                                margin={10}
                                width={130}
                            />
                        </ScrollView>
                    </View>
                </Card>
            </View>
        );
    }
}