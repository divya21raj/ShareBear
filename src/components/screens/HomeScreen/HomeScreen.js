import React, { Component } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
} from "react-native";

// External Library imports
import { Container, Content,} from 'native-base';

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
                    leftIconName='ios-menu'
                    onLeftButtonPress={() => this.props.navigation.openDrawer()}
                    searchPlaceholder={'What are you looking for?'}
                />

                <Content contentContainerStyle={styles.container}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <ScrollView
                            vertical={true}
                            showsVerticalScrollIndicator={false}
                        >
                            <FeaturedView 
                                navigation={ this.props.navigation }    
                            />

                            <RecommendedView />

                            <RecommendedView />

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
        backgroundColor: '#f2f3f9',
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
