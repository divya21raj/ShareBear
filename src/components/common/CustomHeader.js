import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Text
} from "native-base";

class CustomHeader extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.drawerOpen()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});

export default CustomHeader;