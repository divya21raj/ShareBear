import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
} from "react-native";

// External Library imports
import { Button, Container, Content, List, ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

// Local Imports
import HomeScreenHeader from './HomeScreenHeader';
import FeaturedView from './FeaturedView';
import RecommendedView from './RecommendedView';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        header:null,
        drawerLabel: 'Notification',
        drawerIcon: ({ tintColor }) => (
            <Image
                tintColor={tintColor}
                source={require('../../../assets/DrawerIcons/logo.png')}
                style={styles.icon}
            />
        ),
    })

    render() {
        console.log("HomeRender")
        return (
            <Container>
                
                <HomeScreenHeader 
                    leftIconName='md-menu'
                    onLeftButtonPress={() => this.props.navigation.openDrawer()}
                    searchPlaceholder={'What are you looking for?'}
                />

                <Content contentContainerStyle={styles.container}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <ScrollView
                            vertical={true}
                            showsVerticalScrollIndicator={false}
                        >
                            <FeaturedView />

                            <RecommendedView />

                            <RecommendedView />

                            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '100', paddingHorizontal: 15, color: 'grey' }}>
                                    Get It From
                                </Text>
                                <Button primary onPress={() => this.props.navigation.navigate('ItemDetail')} >
                                    <Text>  Find Now  </Text>
                                </Button>
                            </View>

                            <View>
                            <List>
                                <ListItem iconLeft iconRight>
                                    <Icon name="ios-search" size={20} color="#000000" style={{ paddingLeft: 10, marginRight: 10 }} />
                                    <Text>Foucoult is bae</Text>
                                    <Icon name='ios-notifications' size={20} color="#000000" style={{ paddingLeft: 10, marginRight: 10}} />
                                </ListItem>
                            </List>
                            </View>
                        </ScrollView>
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
