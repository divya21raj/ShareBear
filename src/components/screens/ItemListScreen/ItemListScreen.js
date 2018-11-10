import React, { Component } from 'react';

import {
    View,
    StatusBar,
    TouchableOpacity, ScrollView,
    SafeAreaView,
} from 'react-native';

// External Library imports
import { Container, Text, Content} from 'native-base';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

// Local Imports
import ItemListScreenHeader from './ItemListScreenHeader';
import ItemCard from '../../reusables/ItemCard';

class ItemListScreen extends Component {
    state = { items: [
        {
            title: 'WWE 2K18',
            thumbnail: require('../../../assets/sr.jpg'),
            subtitle: 'for PC',
            rating: 4.5,
            size: '32 GB',
        },
        {
            title: 'FIFA 18',
            thumbnail: require('../../../assets/games.jpg'),
            subtitle: 'for PC',
            rating: 4.6,
            size: '21 GB',
            
        },
        {
            title: 'WWE 2K18',
            thumbnail: require('../../../assets/sr.jpg'),
            subtitle: 'for PC',
            rating: 4.5,
            size: '32 GB',
        },
        {
            title: 'FIFA 18',
            thumbnail: require('../../../assets/games.jpg'),
            subtitle: 'for PC',
            rating: 4.6,
            size: '21 GB',
            
        },
        {
            title: 'WWE 2K18',
            thumbnail: require('../../../assets/sr.jpg'),
            subtitle: 'for PC',
            rating: 4.5,
            size: '32 GB',
        },
    ]};
    
    renderItems() {
        return this.state.items.map((item) => {
        return (
            <ItemCard 
                    key={item.title}
                    item={item}
                    rightIconName='heart'
                />
        );
        });
    }
    
    render(){
        const item = this.props.navigation.getParam('itemList');
        return(
            <Container>
                <ItemListScreenHeader 
                            leftIconName='ios-arrow-back'
                            onLeftButtonPress={() => this.props.navigation.goBack()}
                            headerTitle={item.title}
                />

                <View style={styles.headerViewContainer}>
                    <View style={styles.headerLeftView} >
                        <TouchableOpacity activeOpacity={0.9}
                        //onPress
                        >
                            <Icon name='ios-apps' size={40} paddingTop={5} style={styles.iconContainerStyle} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerRightViews} >
                        <TouchableOpacity activeOpacity={0.9}
                        //onPress
                        >
                            <Icon name='md-funnel' size={30} style={styles.iconContainerStyle} >
                            <Text > Sort </Text>
                            </Icon>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerRightViews} >
                        <TouchableOpacity activeOpacity={0.9}
                        //onPress
                        >
                            <Icon name='ios-funnel' size={30} style={styles.iconContainerStyle} >
                            <Text> Filter </Text>
                            </Icon>
                        </TouchableOpacity>
                    </View>

                </View>
                <Content >
                    <SafeAreaView style={{ flex: 1 }}>
                        <ScrollView>
                            {this.renderItems()}
                        </ScrollView>
                    </SafeAreaView>
                </Content>
            </Container>
        );
    }
}
export default withNavigation(ItemListScreen);
const styles= {
    headerViewContainer:{
        flexDirection: 'row',
        borderBottomColor: '#D3D3D3',
        marginBottom: 3,
        height: 45
    },
    headerLeftView:{
        flex: 1,
        height:45,
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        borderRightColor: '#D3D3D3',
        alignItems: 'center'
    },
    headerRightViews:{
        height:45,
        borderRightColor: '#D3D3D3',
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainerStyle:{
        color: '#ff8821',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
    }
}