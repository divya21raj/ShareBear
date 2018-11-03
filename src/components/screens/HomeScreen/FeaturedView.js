import React, { Component } from 'react';
import { Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import FeaturedCard from '../../reusables/FeaturedCard';    

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

class FeaturedView extends Component {

    state = {
        entries: [
            {
                title: 'Metal Gear Solid V - The Phantom Pain',
                description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                imageUri: 'https://steamuserimages-a.akamaihd.net/ugc/496889383570489912/577069FFC5D5C8D94277F33CD0E6A50764F51589/',
                thumbnail: '../../assets/bs.jpg',
            },
            {
                title: 'Stranger Things',
                description: 'Lorem ipsum dolor sit amet',
                thumbnail: '../../assets/bs.jpg',
                imageUri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/261c2340664543.57ba7f41d2b3b.png'
            },
            {
                title: 'Oblivion',
                description: 'Lorem ipsum dolor sit amet et nuncat ',
                thumbnail: '../../assets/bs.jpg',
                imageUri: 'https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422'
            },
            {
                title: 'Game Of Thrones',
                description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                thumbnail: '../../assets/bs.jpg',
                imageUri: 'https://ae01.alicdn.com/kf/HTB1r9tSKVXXXXXTXFXXq6xXFXXXD/Game-of-Thrones-TV-Show-Season-Drama-Series-Watercolor-inkjet-Watercolor-inkjet-Fabric-poster-43-x.jpg_640x640.jpg'
            },
            {
                title: 'Inception',
                description: 'Lorem ipsum dolor sit amet',
                thumbnail: '../../assets/bs.jpg',
                imageUri: 'https://mrmoviefiend.files.wordpress.com/2010/06/inception-poster-8.jpg'
            },
            {
                title: 'Maleficient',
                description: 'Lorem ipsum dolor sit amet',
                thumbnail: '../../assets/bs.jpg',
                imageUri: 'https://i.pinimg.com/originals/66/24/96/6624960f0062bd8b8845037c6776277c.jpg'
        }
        ]
    };
    
    _renderItem ({item, index}) {
        return (
            <FeaturedCard 
                item={item}
            />
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={3}
              hasParallaxImages={true}
              loop={true}
              inactiveSlideScale={0.95}
              autoplay={true}
              lockScrollWhileSnapping={true}
            />
        );
    }
}

export default FeaturedView;