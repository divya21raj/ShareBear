import React, { Component } from 'react';

import {
    StyleSheet,
} from 'react-native';

// External Library imports
import Swiper from 'react-native-swiper';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import { Container } from 'native-base';

export default class PreferencesScreen extends Component {
    render () {
        return (
            <Container>
                <Swiper style={styles.wrapper} showsButtons={false}>
                    <Slide1 />
                    <Slide2 />
                    <Slide3 />
                    <Slide4 />
                </Swiper>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    headerViewContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        backgroundColor: '#9DD6EB',
        marginBottom: 3,
        height: 50
    },
  })
