import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from 'native-base';

export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
            <Header />
            <Content>
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={{ uri: this.props.imageUri }} />
                    </Left>
                    <Body>
                        <Text>{this.props.name}</Text>
                        <Text note>{this.props.subtitle}</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.props.onRightButtonPress}>
                            <Icon name={this.props.rightIconName} size={25} color={'#ff8821'} />
                        </Button>
                    </Right>
                </ListItem>
            </List>
            </Content>
      </Container>
    );
  }
}
