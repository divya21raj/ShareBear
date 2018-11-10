import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';

// External library imports
import { Header, Item, Container, Input, Button, StyleProvider, Content, ListItem, Thumbnail, Left, Body} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

// Local Imports
import getTheme from '../../../../native-base-theme/components';
import platform from '../../../../native-base-theme/variables/platform';

import {MOVIE_DB_IMAGE_URL} from '../../../const';

import { getSuggestions } from '../../../actions';
import Card from '../../../../native-base-theme/components/Card';
import MediaInfo from './MediaInfo';

class PostNewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.itemMap = new Map;
    }
    
    componentWillMount() {
        this.props.suggestions.length=0;
        console.log(`cwm->${this.props.suggestions.length}`);
    }

    _onChangeSearchText(text, type) {
        this.props.getSuggestions(text, type);
    }

    getFinalItem(suggestion, type){
        if(type !== 'games'){
            url = `${MOVIE_DB_IMAGE_URL}/${suggestion.poster_path}`
            overview = suggestion.overview;
        }
        else {
            overview = suggestion.summary
            if("cover" in suggestion)
                url = `http://${suggestion.cover.url}`;
            else
                url ="http://downloadicons.net/sites/default/files/games-icon-5118.png";
            
        }

        if(type === 'movie')
            itemTitle = suggestion.title;
        else itemTitle = suggestion.name;

        return item = {
            id: suggestion.id,
            title: itemTitle,
            image_url: url,
            release_date: suggestion.release_date,
            overview: overview,
            }
    }

    renderSuggestions(type) {
        console.log(this.props.suggestions.length)
        if(this.props.suggestions != null && this.props.suggestions.length > 0){
            console.log(`In -> ${this.props.suggestions.length}`)
            return this.props.suggestions.map(suggestion => {
                item = this.getFinalItem(suggestion, type);
                id = suggestion.id;
                this.itemMap.set(id, item);

                return (    
                    <ListItem key={item.id} thumbnail 
                        onPress={()=>{
                            Keyboard.dismiss();
                            this._onChangeSearchText("qwdqywbdyq", type)
                            sug_id = suggestion.id;
                            this.setState({...this.state, item: this.itemMap.get(sug_id)})
                        }
                    }>
                        <Left>
                            <Thumbnail square source={{ uri: item.image_url}} />
                        </Left>
                        <Body>
                            <Text>{item.title}</Text>
                            <Text note numberOfLines={1}>{item.release_date}</Text>
                        </Body>
                    </ListItem>
                );
            });
        }
        else{
            console.log(this.state)
            if(this.state.item != null)
                return(<MediaInfo item={this.state.item} type={type}/>)
            else return(<View></View>)
        }
    }

    render() {
        const type = this.props.navigation.getParam('type');
        console.log(type);
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <Header searchBar rounded autoCorrect={false}>
                        <Item>
                            <Icon name="ios-search" size={20} color="#ff8821" style={{ paddingLeft: 10, marginRight: 10 }}  />
                            <Input
                                onChangeText={(text) => {this._onChangeSearchText(text, type)}} // <-- Here
                                placeholder="What do you want to share?"
                            />
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </Header>
                    <Content>
                        {this.renderSuggestions(type)}
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

const mapStateToProps = state => {
    return({
        suggestions: state.postNew.suggestions,
        error: state.postNew.error,
        loading: state.postNew.loading
    });
  }
  
export default connect(mapStateToProps, { getSuggestions })(PostNewScreen);