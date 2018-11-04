import React, { Component } from 'react';

import {
    View,
    StatusBar
} from "react-native";

// External Library imports
import { Button, Container, H2, Text, Card, } from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import ReadMore from 'react-native-read-more-text';


// Local Imports
import ItemDetailScreenHeader from './ItemDetailScreenHeader';
import ThumbnailList from './ThumbnailList';

export default class ItemDetailScreen extends Component{
    render() {
        const item = this.props.navigation.getParam('item');
        console.log(item)
        return (
            <Container>
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
    },
    imageContainer: {
        flex: 0.55,
        marginTop:10,
        marginLeft:5,
        height: 300,
        width: null,
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
}