import React, {Component} from 'react';
var defaultStyles = require('../Styles/DefaultStyles');
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
    buttonText: {
        color: '#FFF',
        fontSize: 40,
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

        this.state = {
            images: props.images,
            current_image: 1,
            image_count: 1,
        }
    }

    render() {

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
            <Swiper
                nextButton={<Text style={styles.buttonText}>›</Text>}
                prevButton={<Text style={styles.buttonText}>‹</Text>}
                height={300}
                dotColor={'rgba(255,255,255,0.6)'}
                activeDotColor={'#FFF'}
                showsButtons={true}>
                {images}
            </Swiper>
        )
    }
}

module.exports = SwipeImage;