import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

//Local Imports
import ImageWithTitleCard from '../../reusables/ImageWithTitleCard';

export default class CategoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <View style={{ marginTop: 5, paddingTop:5, paddingEnd:10, paddingBottom:5, backgroundColor:'white'}}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <ImageWithTitleCard 
                    imageUri={require('../../../assets/media.png')}
                    title="Media"
                    height={35}
                    width={60}
                    margin={0}
                    resize='center'
                />
                <ImageWithTitleCard 
                    imageUri={require('../../../assets/games.jpg')}
                    title="Games"
                    height={35}
                    width={60}
                    margin={0}
                    resize='center'
                />
                <ImageWithTitleCard 
                    imageUri={require('../../../assets/appliances.jpg')}
                    title="Utils"
                    height={35}
                    width={60}
                    margin={0}
                    resize='center'
                />
                <ImageWithTitleCard 
                    imageUri={require('../../../assets/services.png')}
                    title="Services"
                    height={35}
                    width={60}
                    margin={0}
                    resize='center'
                />
                <ImageWithTitleCard 
                    imageUri={require('../../../assets/books.jpg')}
                    title="Books"
                    height={35}
                    width={60}
                    margin={0}
                    resize='center'
                />
                <ImageWithTitleCard 
                    imageUri={require('../../../assets/others.png')}
                    title="Others"
                    height={35}
                    width={60}
                    margin={0}
                    resize='center'
                />
            </ScrollView>
        </View>
    );
  }
}
