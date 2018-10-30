import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    ScrollView,
    Image,
    Dimensions
} from "react-native";

// External Library imports
import { Button, Container, Header, Item, Input, Content, Left, Body, Title, Right, StyleProvider } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

// Local Imports
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';

export default class ItemDetailScreen extends Component{
    render() {
        console.log("ItemDetailScreen Render")
        return (
            <Container>
                <StyleProvider style={getTheme(platform)}>
                    <View>
                        <Header noShadow style={{borderBottomWidth: 0, elevation:0}}>
                            <Left>
                            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                                    <Icon name='arrowleft' size={25} color={'white'} />
                            </Button>
                            </Left>
                            <Body>
                                <Title>ShareBear</Title>
                            </Body>
                            <Right >
                                <Icon name="ios-search" size={20} color="#ff8821" style={{paddingLeft:10, marginRight: 10 }}/>
                                <Icon name="mail-forward" size={20} color="#ff8821" style={{paddingLeft:10, marginRight: 10 }}/>
                            </Right>
                        </Header>
                    </View>
                </StyleProvider>
            </Container>
        );
    }
}