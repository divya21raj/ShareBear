import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon, Button, StyleProvider, ListItem, Left, Right, Body, Content, Thumbnail} from 'native-base';


// Local Imports
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';

/**
 * The props for this Header =>
 * 1.onRightButtonPress
 * 2.rightIconName
 * 3.name
 * 4.subtitle
 * 5.imageUri
 */

export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <StyleProvider style={getTheme(platform)}>
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{ uri: this.props.imageUri }} />
                </Left>
                <Body style={{marginTop:5}}>
                    <Text style={{fontSize:18, paddingBottom:5, paddingTop:0, fontWeight:'400'}}>{this.props.name}</Text>
                    <Text note>{this.props.subtitle}</Text>
                </Body>
                <Right>
                    <Button size={20} transparent onPress={this.props.onRightButtonPress}>
                        <Icon style={{ padding: 0, }} name={this.props.rightIconName} color={'#ff8821'} />
                    </Button>
                </Right>
            </ListItem>
        </StyleProvider>        
    );
  }
}
