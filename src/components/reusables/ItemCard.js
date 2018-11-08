import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { withNavigation } from 'react-navigation';
import { Icon, Button, StyleProvider, ListItem, Left, Right, Body, Content, Thumbnail} from 'native-base';

class ItemCard extends Component{
    render() {
        const {item, rightIconName} = this.props;
        return(
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('ItemDetail', {'item': item})}
            >
                <ListItem avatar>
                <Left>
                    <Thumbnail source={item.thumbnail} />
                </Left>
                <Body>
                    <Text style={styles.bodyText}>{item.title}</Text>
                    <Text note>{item.subtitle}</Text>
                    <Text note>{item.rating}</Text>
                    <Text note>{item.size}</Text>
                </Body>
                <Right>
                    <Button size={10} transparent>
                        <Icon style={{ padding: 0, }} name={rightIconName} color={'black'} />
                    </Button>
                </Right>
                </ListItem>
            </TouchableOpacity>
        );
    }
}

const styles= {
    bodyText:{
        fontSize:18,
        paddingBottom:5,
        paddingTop:0,
        fontWeight:'400'
    }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(ItemCard);