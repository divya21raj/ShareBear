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

// Local Imports
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

import Icon from 'react-native-vector-icons/Ionicons'
import Category from './HomeScreen/Category.js'

const { height, width } = Dimensions.get('window')
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        drawerLabel: 'Notification',
        drawerIcon: ({ tintColor }) => (
          <Image
            tintColor={tintColor}
            source={require('../assets/DrawerIcons/logo.png')}
            style={styles.icon}
          />
        ),
    })

    render() {
        console.log("HomeRender")
        return (
            <Container>
                <StyleProvider style={getTheme(platform)}>
                    <Container>
                        <Header noShadow style={{borderBottomWidth: 0, elevation:0}}>
                            <Left>
                                <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                                    <Icon name='md-menu' size={25} color={'white'} />
                                </Button>
                            </Left>
                            <Body>
                                <Title>ShareBear</Title>
                            </Body>
                            <Right />
                        </Header>
                        <Header searchBar rounded>
                            <Item>
                                <Icon name="ios-search" size={20} color="#ff8821" style={{paddingLeft:10, marginRight: 10 }}/>
                                <Input placeholder="Search" />
                            </Item>
                            <Button transparent>
                                <Text>Search</Text>
                            </Button>
                        </Header>
                    </Container>
                </StyleProvider>

                <Content>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <ScrollView scrollEventThrottle={16}>
                                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0 }}>
                                    <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                        What can we help you find?
                                    </Text>

                                    <View style={{ height: 130, marginTop: 20 }}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            <Category imageUri={require('../../assets/home.jpg')}
                                                name="Home"
                                            />
                                            <Category imageUri={require('../../assets/experiences.jpg')}
                                                name="Experiences"
                                            />
                                            <Category imageUri={require('../../assets/restaurant.jpg')}
                                                name="Resturant"
                                            />
                                        </ScrollView>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </Content>
            </Container>
        );
    }  
}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    icon: {
        width: 24,
        height: 24,
    },
  });
