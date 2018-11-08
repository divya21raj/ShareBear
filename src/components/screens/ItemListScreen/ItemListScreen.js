import React, { Component } from 'react';

import {
    View,
    StatusBar
} from "react-native";

// External Library imports
import { Button, Container, H2, H3, Text, Card, List, } from 'native-base';

// Local Imports
import ItemListScreenHeader from './ItemListScreenHeader';
//import ItemCard from '../../reusables/ItemCard';

export default class ItemListScreen extends Component{
    render(){
        const item = this.props.navigation.getParam('itemList');
        return(
            <Container>
                <ItemListScreenHeader 
                            leftIconName='ios-arrow-back'
                            onLeftButtonPress={() => this.props.navigation.goBack()}
                            headerTitle={item.title}
                        />
            </Container>
        );
    }
}