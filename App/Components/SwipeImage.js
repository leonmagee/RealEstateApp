import React, {Component} from 'react';
var defaultStyles = require('./DefaultStyles');
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
    wrapper: {
    },
    // slide1: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#9DD6EB',
    // },
    // slide2: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#97CAE5',
    // },
    // slide3: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#92BBD9',
    // },
    // text: {
    //     color: '#fff',
    //     fontSize: 30,
    //     fontWeight: 'bold',
    // }
})

class SwipeImage extends Component {

    constructor(props) {
        super(props);

        let image_demo = [
            "https://listing-images.homejunction.com/sandicor/110027376/photo_1.jpg",
            "https://listing-images.homejunction.com/sandicor/110027376/photo_2.jpg",
            "https://listing-images.homejunction.com/sandicor/110027376/photo_3.jpg",
            "https://listing-images.homejunction.com/sandicor/110027376/photo_4.jpg",
        ];


        this.state = {
            images: props.images,
            //images: image_demo,
            current_image: 1,
            image_count: 1,
        }
    }

    render() {

        let next_button = <Text></Text>;

        let images = this.state.images.map((image, index) => {
            return (
                <Image
                    key={index}
                    style={defaultStyles.listingImage}
                    source={{uri: image}}>
                </Image>
            )
        });

        return (
            <Swiper height={250} dotColor={'#04C0C5'} style={styles.wrapper} showsButtons={true}>
                {images}
            </Swiper>
        )
    }
}

module.exports = SwipeImage;