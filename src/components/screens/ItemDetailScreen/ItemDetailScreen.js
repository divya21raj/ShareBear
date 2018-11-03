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
import ItemDetailScreenHeader from './ItemDetailScreenHeader';

export default class ItemDetailScreen extends Component{
    render() {
        const item = this.props.navigation.getParam('item');
        console.log(item)
        return (
            <Container>
                <ItemDetailScreenHeader 
                    leftIconName='ios-arrow-back'
                    onLeftButtonPress={() => this.props.navigation.goBack()}
                    headerTitle={item.title}
                />
                <Content>
                    <SafeAreaView style={{ flex: 1 }}>
                        <ScrollView
                            vertical={true}
                            showsVerticalScrollIndicator={false}
                        >
                        <View style={styles.itemContainer}>

                        </View>
                        </ScrollView>
                    </SafeAreaView>
                </Content>
            </Container>
        );
    }
}

const styles = {
    itemContainer: {
        height: 100,
        backkgroundColor: 'blue',
    }
}