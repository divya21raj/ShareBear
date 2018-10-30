import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// External Library Imports
import {Card} from 'native-base';

// Local Imports
import Category from '../../reusables/Category.js';

export default class RecommendedView extends Component {
    render() {
        return(
            <Card style={{paddingBottom:10, paddingTop:5, marginLeft:5}}>
                <Text style={{ fontSize: 16, fontWeight: '100', paddingHorizontal: 15, color: 'grey' }}>
                    Recommended
                </Text>

                <View style={{ height: 130, marginTop: 10 }}>
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
        );
    }
}