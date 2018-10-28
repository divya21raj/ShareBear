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

import Category from '../reusables/Category.js';
import FeaturedCard from '../reusables/FeaturedCard';

  
export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        drawerLabel: 'Notification',
        drawerIcon: ({ tintColor }) => (
          <Image
            tintColor={tintColor}
            source={require('../../assets/DrawerIcons/logo.png')}
            style={styles.icon}
          />
        ),
    })

    render() {
        console.log("HomeRender")
        return (
            <Container>
                <StyleProvider style={getTheme(platform)}>
                    <View>
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
                    </View>
                </StyleProvider>

                <Content contentContainerStyle={styles.container}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View >
                            <ScrollView scrollEventThrottle={16}>
                                    <Text style={{ fontSize: 16, fontWeight: '100', marginTop:10, paddingHorizontal: 15, color:'grey'}}>
                                        Featured
                                    </Text>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    style={{marginTop:10}}
                                    >
                                    <FeaturedCard imageUri={require('../../assets/bs.jpg')}/>
                                    <FeaturedCard imageUri={require('../../assets/mal.jpg')}/>
                                    <FeaturedCard imageUri={require('../../assets/sr.jpg')}/>
                                    <FeaturedCard imageUri={require('../../assets/sn.png')}/>
                                    <FeaturedCard imageUri={require('../../assets/venom.jpeg')}/>
                                    <FeaturedCard imageUri={require('../../assets/inc.jpg')}/>
                                </ScrollView>
                                
                                <View style={{ flex: 1, backgroundColor: 'white', marginTop: 10 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '100', paddingHorizontal: 15, color:'grey'}}>
                                        Recommended
                                    </Text>

                                    <View style={{ height: 130, marginTop: 10 }}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            <Category imageUri={require('../../assets/home.jpg')}
                                                name="Homer"
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
