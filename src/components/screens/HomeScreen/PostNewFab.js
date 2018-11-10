import React, { Component } from 'react';
import { View, Text } from 'react-native';

// External Library imports
import { Fab, Icon, Button} from 'native-base';
import {withNavigation} from 'react-navigation';

class PostNewFab extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false,
    };
  }

  render() {
    return (
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#ff8821' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('PostNewChoice')}>
            <Icon name="add" />
        </Fab>
    );
  }
}

export default withNavigation(PostNewFab);
