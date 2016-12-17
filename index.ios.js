import React, {Component} from 'react';
import Main from './App/Components/Main'

// // TESTING IMPORTS
// import SingleListing from './App/Components/SingleListing';
// var test_data = require('./App/Components/TestData');
// import SwipeImage from './App/Components/SwipeImage';
// import MapTest from './App/Components/MapTest';
//import AnimationTest from './App/Components/AnimationTest'

import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    /**
     * This is the container of everything, not just the nav
     */
    container: {
        flex: 1,
        backgroundColor: '#111111'
    }
});

class RealEstateApp extends Component {

    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    component: Main,
                    title: 'Home',
                }}
                // initialRoute={{
                //     component: SingleListing,
                //     title: 'Test Listing',
                //     passProps: {
                //         listing: test_data
                //     }
                // }}
                // initialRoute={{
                //         component: SwipeImage,
                //         title: 'Image Test',
                //     }}
                // initialRoute={{
                //         component: MapTest,
                //         title: 'Map',
                //     }}
                navigationBarHidden={true}
            />
        )
    }
}

AppRegistry.registerComponent('RealEstateApp', () => RealEstateApp);
