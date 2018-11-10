import React, { Component } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    View,
    ImageBackground
} from 'react-native';

// External Library imports
import { Col, Row, Grid } from 'react-native-easy-grid';
import { withNavigation } from 'react-navigation';
import { Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    ListItem,
    CheckBox,
    Text,
    Left,
    Right,
    Body} from 'native-base';

class Slide4 extends Component {
    
    constructor(props) {
        super(props);
        this.item1='NEPHRITIS';
        this.item2='BELIZE HOLE';
        this.item3='TURQUOISE';
        this.item4='EMERALD';
        this.item5='PETER RIVER';
        this.item6='AMETHYST';
        this.item7='WET ASPHALT';
        this.item8='GREEN SEA';
        this.state = {
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
            checkbox6: false,
            checkbox7: false,
            checkbox8: false,
          };
        this.itemMap = new Map([
            [this.item1 , false],  
            [this.item2 , false],
            [this.item3 , false],
            [this.item4 , false],  
            [this.item5 , false],
            [this.item6 , false],
            [this.item7 , false],  
            [this.item8 , false],
        ]);
      }

    toggleSwitch1() {
        this.setState({
            checkbox1: !this.state.checkbox1
        });
        this.itemMap.set(this.item1 ,!this.state.checkbox1);
        //console.log(this.itemMap.get(this.item1));
      }
      toggleSwitch2() {
        this.setState({
          checkbox2: !this.state.checkbox2
        });
        this.itemMap.set(this.item2 ,!this.state.checkbox2);
        //console.log(this.itemMap.get(this.item2));
      }
      toggleSwitch3() {
        this.setState({
          checkbox3: !this.state.checkbox3
        });
        this.itemMap.set(this.item3 ,!this.state.checkbox3);
        //console.log(this.itemMap.get(this.item3));
      }
      toggleSwitch4() {
        this.setState({
          checkbox4: !this.state.checkbox4
        });
        this.itemMap.set(this.item4 ,!this.state.checkbox4);
        //console.log(this.itemMap.get(this.item4));
      }
      toggleSwitch5() {
        this.setState({
          checkbox5: !this.state.checkbox5
        });
        this.itemMap.set(this.item5 ,!this.state.checkbox5);
        //console.log(this.itemMap.get(this.item5));
      }
      toggleSwitch6() {
        this.setState({
          checkbox6: !this.state.checkbox6
        });
        this.itemMap.set(this.item6 ,!this.state.checkbox6);
        //console.log(this.itemMap.get(this.item6));
      }
      toggleSwitch7() {
        this.setState({
          checkbox7: !this.state.checkbox7
        });
        this.itemMap.set(this.item7 ,!this.state.checkbox7);
        //console.log(this.itemMap.get(this.item7));
      }
      toggleSwitch8() {
        this.setState({
          checkbox8: !this.state.checkbox8
        });
        this.itemMap.set(this.item8 ,!this.state.checkbox8);
        //console.log(this.itemMap.get(this.item8));
      }

    render(){
        const checkBoxColor = '#2ecc71';
        const img1 = require('../../../assets/books.jpg');
        const img2 = require('../../../assets/books.jpg');
        const img3 = require('../../../assets/books.jpg');
        const img4 = require('../../../assets/books.jpg');
        const img5 = require('../../../assets/books.jpg');
        const img6 = require('../../../assets/books.jpg');
        const img7 = require('../../../assets/books.jpg');       
        const img8 = require('../../../assets/books.jpg');
        return(
            <View>
                <ScrollView>
                <View style={styles.headerViewContainer}>
                    <Text>Anime ?</Text>
                </View>
                <Grid>
                    <Row>
                        <Col style={styles.itemContainer}>
                        <ImageBackground 
                        source={img1} style={styles.imageBackground}
                        >
                            <CheckBox
                                color= {checkBoxColor}
                                checked={this.state.checkbox1}
                                onPress={() => this.toggleSwitch1()}
                            />
                        </ImageBackground>
                        </Col>
                        <Col style={styles.itemContainer}>
                        <ImageBackground 
                        source={img2} style={styles.imageBackground}
                        >
                            <CheckBox
                                color={checkBoxColor}
                                checked={this.state.checkbox2}
                                onPress={() => this.toggleSwitch2()}
                            />
                        </ImageBackground>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={styles.itemContainer}>
                        <ImageBackground 
                        source={img3} style={styles.imageBackground}
                        >
                            <CheckBox
                                color={checkBoxColor}
                                checked={this.state.checkbox3}
                                onPress={() => this.toggleSwitch3()}
                            />
                        </ImageBackground>
                        </Col>
                        <Col style={styles.itemContainer}>
                        <ImageBackground 
                        source={img4} style={styles.imageBackground}
                        >
                            <CheckBox
                                color={checkBoxColor}
                                checked={this.state.checkbox4}
                                onPress={() => this.toggleSwitch4()}
                            />
                        </ImageBackground>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={styles.itemContainer}>
                        <ImageBackground 
                        source={img5} style={styles.imageBackground}
                        >
                            <CheckBox
                                color={checkBoxColor}
                                checked={this.state.checkbox5}
                                onPress={() => this.toggleSwitch5()}
                            />
                        </ImageBackground>
                        </Col>
                        <Col style={styles.itemContainer}>
                        <ImageBackground 
                        source={img6} style={styles.imageBackground}
                        >
                            <CheckBox
                                color={checkBoxColor}
                                checked={this.state.checkbox6}
                                onPress={() => this.toggleSwitch6()}
                            />
                        </ImageBackground>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={styles.itemContainer}>
                        <ImageBackground 
                        source={img7} style={styles.imageBackground}
                        >
                            <CheckBox
                                color={checkBoxColor}
                                checked={this.state.checkbox7}
                                onPress={() => this.toggleSwitch7()}
                            />
                        </ImageBackground>
                        </Col>
                        <Col style={styles.itemContainer}>
                        <ImageBackground 
                        source={img8} style={styles.imageBackground}
                        >
                            <CheckBox
                                color={checkBoxColor}
                                checked={this.state.checkbox8}
                                onPress={() => this.toggleSwitch8()}
                            />
                        </ImageBackground>
                        </Col>
                    </Row>
                    <View style={styles.footerViewContainer}>
                        <Button onPress= {() => this.props.navigation.navigate('Home')}>
                        <Text>Go Share</Text>
                        </Button>
                    </View>
                </Grid>
                </ScrollView>
            </View>
        );
    }
}
export default withNavigation(Slide4);
const styles = StyleSheet.create({
    headerViewContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        backgroundColor: '#ff8821',
        marginBottom: 3,
        height: 50
    },
    footerViewContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomColor: '#D3D3D3',
        backgroundColor: '#ff8821',
        marginTop: 5,
        paddingTop: 3,
        paddingBottom: 3,
        height: 50
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
    },
    imageBackground: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius:3,
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 5,
        padding: 10,
        height: 150,
        backgroundColor: 'transparent',
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
  })
/**/
/* */