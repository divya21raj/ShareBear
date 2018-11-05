import React, { Component } from 'react';

import {
    View,
    StatusBar
} from "react-native";

// External Library imports
import { Button, Container, H2, H3, Text, Card, List, } from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import ReadMore from 'react-native-read-more-text';


// Local Imports
import ItemDetailScreenHeader from './ItemDetailScreenHeader';
import ThumbnailList from './ThumbnailList';
import UserCard from '../../reusables/UserCard';

export default class ItemDetailScreen extends Component{
    render() {
        const item = this.props.navigation.getParam('item');
        console.log(item)
        return (
            <Container style={{backgroundColor: '#ced5e0'}}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <ParallaxScrollView
                    backgroundColor="#ff8821"
                    parallaxHeaderHeight={300}
                    renderForeground={() => (
                        <Image 
                            style={styles.slideInnerContainer} 
                            source={{uri: item.imageUri}}
                            indicator={ProgressBar}
                            indicatorProps={{
                                size: 80,
                                borderWidth: 0,
                                color: '#ff8821',
                                unfilledColor: 'rgba(200, 200, 200, 0.2)'
                            }}
                        />
                    )}
                    stickyHeaderHeight={75}
                    renderStickyHeader={() => (
                        <ItemDetailScreenHeader 
                            leftIconName='ios-arrow-back'
                            onLeftButtonPress={() => this.props.navigation.goBack()}
                            headerTitle={item.title}
                        />
                    )}
                    renderFixedHeader={() => (
                        <ItemDetailScreenHeader 
                            leftIconName='ios-arrow-back'
                            onLeftButtonPress={() => this.props.navigation.goBack()}
                            headerTitle={""}
                        />
                    )}
                >
                    <Card style={styles.itemContainer}>
                            <View style={styles.infoContainer}>
                                <H2 style={styles.title} font-size={21}>{item.title}</H2>
                                <View style={{backgroundColor:'#e5e2da', width:null, height:1, marginTop:8, marginBottom:8}}></View>
                                <ReadMore
                                    numberOfLines={3}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    onReady={this._handleTextReady}>
                                    <Text style={styles.description}>
                                        {item.description}
                                    </Text>
                                </ReadMore>
                                <ThumbnailList />
                            </View>
                    </Card>
                    <View>
                        <Card style={styles.getItFromContainer}>
                            <H3 style={styles.getItFromText} font-size={10}>
                                Get It From
                            </H3>
                            <List>
                                <UserCard
                                    name='Sooryanarayanan'
                                    imageUri={item.imageUri}
                                    subtitle='107 2B'
                                    rightIconName='ios-share-alt'
                                    onRightButtonPress={()=>console.log('request')}
                                />
                                <UserCard
                                    name='Hiran PY'
                                    imageUri={item.imageUri}
                                    subtitle='208 1B'
                                    rightIconName='ios-share-alt'
                                    onRightButtonPress={()=>console.log('request')}
                                    />
                            </List>
                        </Card>
                    </View>
                </ParallaxScrollView>
            </Container>
        );
    }

    _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={{color: '#ff8821', marginTop: 5}} onPress={handlePress}>
            Read more
          </Text>
        );
      }
    
      _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={{color: "#ff8821", marginTop: 5}} onPress={handlePress}>
            Show less
          </Text>
        );
      }
    
      _handleTextReady = () => {
        // ...
      }
}

const styles = {
    itemContainer: {
        flexWrap: "wrap",
        marginTop: 0,
        marginLeft: 2,
        marginRight: 2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom: 10,
        marginBottom:15,
    },
    infoContainer: {
        flex: 1,
        marginTop:10,
        marginRight:5,
        flexDirection: 'column',
        width: null,
    },
    slideInnerContainer: {
        width: null,
        flex: 1,
        height: null,
        resizeMode: 'cover',
    },
    title:{
        color: '#4f5054',
        justifyContent: 'flex-start',
    },
    description:{
        marginTop:5,
        alignSelf: 'center',
        color: '#333438'
    },
    getItFromContainer:{
        marginTop:0,
        paddingBottom:20,
    },
    getItFromText:{
        color: '#514d47',
        justifyContent: 'flex-start',
        marginLeft:15,
        marginTop:10,
    }
}