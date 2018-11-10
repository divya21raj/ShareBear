import React, { Component } from 'react';
import { View, Image, SafeAreaView } from 'react-native';

import { Container, H2, H3, Text, Card,Icon, Content, Fab } from 'native-base';
import ReadMore from 'react-native-read-more-text';
import Tags from "react-native-tags";

class MediaInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {tags:[]};
  }

  render() {
    const {item, type} = this.props;
    return (
        <Container style={{backgroundColor: '#ced5e0'}}>
            <Content>
                <SafeAreaView style={{ flex: 1 }}>
                    <View>
                        <Image style={{width:'100%', height:150 }}source = {{uri: item.image_url}}/>
                    </View>
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
                                    {item.overview}
                                </Text>
                            </ReadMore>
                        </View>
                    </Card>
                    <Card style={styles.itemContainer}>
                        <H3 style={{marginTop:5, marginBottom:5, color:'#ff8821'}}>#tags</H3>
                        <Tags 
                            textInputProps={{
                                placeholder: "Tags"
                            }}
                            initialTags={[type]}
                            onChangeTags={tags => console.log(tags)}
                            onTagPress={(index, tagLabel, event, deleted) =>
                                console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                            }
                            tagContainerStyle={{backgroundColor: '#ff8821'}}
                            tagTextStyle={{color:'white'}}
                            containerStyle={{ justifyContent: "center" }}
                            inputStyle={{borderRadius: 5, backgroundColor: "#edf0f7" }}
                            />
                        <Text style={{color:'gray', margin:5, fontSize:14}}>Ex- 720p, Fitgirl, Dual-Audio, 4GB, etc.</Text>
                        </Card>
                </SafeAreaView>
            </Content>
            
            <Fab
                style={{ backgroundColor: '#ff8821', marginBottom:50 }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}
                >
                    <Icon name="share" />
            </Fab>
            
        </Container>
    );
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
        marginBottom:5,
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
    }
}

export default MediaInfo;
