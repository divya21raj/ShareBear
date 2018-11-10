import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// External Library Imports
import { withNavigation } from 'react-navigation';

//Local Imports
import ImageWithTitleCard from '../../reusables/ImageWithTitleCard';

class CategoryView extends Component {
    
    state = { items: [
        {
            title: 'Media',
            thumbnail: require('../../../assets/media.png'),
            height: 35,
            margin: 0,
            width: 60,
            resizeMode: 'center',
        },
        {
            title: 'Games',
            thumbnail: require('../../../assets/games.jpg'),
            height: 35,
            margin: 0,
            width: 60,
            resizeMode: 'center',
        },
        {
            title: 'Utils',
            thumbnail: require('../../../assets/appliances.jpg'),
            height: 35,
            margin: 0,
            width: 60,
            resizeMode: 'center',
        },
        {
            title: 'Services',
            thumbnail: require('../../../assets/services.png'),
            height: 35,
            margin: 0,
            width: 60,
            resizeMode: 'center',
        },
        {
            title: 'Books',
            thumbnail: require('../../../assets/books.jpg'),
            height: 35,
            margin: 0,
            width: 60,
            resizeMode: 'center',
        },
        {
            title: 'Others',
            thumbnail: require('../../../assets/others.jpg'),
            height: 35,
            margin: 0,
            width: 60,
            resizeMode: 'center',
        }
    ]};

  renderItems() {
    return this.state.items.map((item) => {
    return (
        <ImageWithTitleCard 
                key={item.title}
                item={item}
                onPress= {() => this.props.navigation.navigate('ItemList', {'itemList': item})}
            />
    );
    });
}

  render() {
        return (
            <View style={{ marginTop: 5, paddingTop:5, paddingEnd:10, paddingBottom:5, backgroundColor:'white'}}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {this.renderItems()}
            </ScrollView>
        </View>
        );
  }
}
export default withNavigation(CategoryView);
