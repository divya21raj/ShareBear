import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// External Library Imports
import {Card} from 'native-base';

// Local Imports
import Category from '../../reusables/Category.js';

export default class RecommendedView extends Component {
    render() {
        return(
            <View style={{marginTop:5, marginBottom:10}}>
                <Text style={{ fontSize: 14, fontWeight: '100', paddingHorizontal: 10, color: '#db9627' }}>
                    Recommended For You >
                </Text>
                <Card style={{padding:1, margin:2,paddingBottom:0,}}>
                    <View style={{ marginTop: 10 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Category imageUri={require('../../../assets/home.jpg')}
                                name="Homes"
                            />
                            <Category imageUri={require('../../../assets/experiences.jpg')}
                                name="Experiences"
                                />
                            <Category imageUri={require('../../../assets/restaurant.jpg')}
                                name="Resturant"
                                />
                            <Category imageUri={require('../../../assets/restaurant.jpg')}
                                name="Resturant"
                            />
                            <Category imageUri={require('../../../assets/restaurant.jpg')}
                                name="Resturant"
                                />
                            <Category imageUri={require('../../../assets/restaurant.jpg')}
                                name="Resturant"
                            />
                        </ScrollView>
                    </View>
                </Card>
            </View>
        );
    }
}