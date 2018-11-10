import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// External library imports
import { Header, Item, Container, Button, StyleProvider, Content, Left, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Hero from 'react-native-hero';

// Local Imports
import getTheme from '../../../../native-base-theme/components';
import platform from '../../../../native-base-theme/variables/platform';

class PostNewChoice extends Component {
    componentWillMount = () => {
        console.ignoredYellowBox = ['Warning: Failed prop'];
    };
    
    overlay(text) {
		return (
            <View style={{ paddingTop:100, justifyContent:'center'}}>
			  <Text style={{ paddingStart: 10, paddingEnd:10, fontSize: 40, color: 'white', backgroundColor:'#ff8821', fontWeight: '400'}}>
				{text}
			  </Text>
			</View>
		)
    }

    renderHero(title, type, image) {
        return(
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {this.props.navigation.navigate('PostNewSearch', {'type': type})}}
            >
                <Hero
                    minHeight={250}
                    source={image}
                    renderOverlay={() => this.overlay(title)}
                    fullWidth={false} 
                    colorOverlay="#ff8821"
                    colorOpacity={0.2}    
                />
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => {this.props.navigation.goBack()}}>
                                <Icon name='ios-arrow-back' size={25} color={'white'} />
                            </Button>
                        </Left>
                        <Body style={{flex: 2, paddingBottom:3}}>
                            <Title>What Do You Want To Share?</Title>
                        </Body>
                    </Header>

                    <Content>
                        <View style={styles.container}>
                            {this.renderHero(
                                "MOVIES",
                                'movie',
                                require('../../../assets/movies_bg.jpg'))}
                                
                            {this.renderHero(
                                "TV SHOWS",
                                'tv',
                                require('../../../assets/tvShow_bg.jpg'))}

                            {this.renderHero(
                                "GAMES",
                                'games',
                                require('../../../assets/game_bg.jpg'))}

                            {this.renderHero(
                                "OTHERS",
                                'others',
                                require('../../../assets/others_bg.jpg'))}
                        </View>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		width: '100%'
	},
});

export default PostNewChoice;
