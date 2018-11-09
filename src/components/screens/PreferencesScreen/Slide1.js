import React, { Component } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    View,
} from 'react-native';

// External Library imports
import Swiper from 'react-native-swiper';
import GridView from 'react-native-super-grid';
import { Container, Content, Card, Button, Text, CheckBox, List, ListItem} from 'native-base';

export default class Slide1 extends Component {
    render(){
        const items = [
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
          ];
        return(
            <View>
                <ScrollView>
                <View style={styles.headerViewContainer}>
                    <Text>What kinda movies do you like ?</Text>
                </View>

                <GridView
                    itemDimension={130}
                    items={items}
                    style={styles.gridView}
                    renderItem={item => (
                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <CheckBox checked={true} />
                    </View>
                    )}
                />    
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerViewContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        backgroundColor: '#9DD6EB',
        marginBottom: 3,
        height: 50
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
      },
      itemContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        borderRadius: 5,
        padding: 10,
        height: 150,
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
  //<Text style={styles.itemName}>{item.name}</Text>