import React, {Component} from 'react';
import Main from './App/Components/Main'
import MapTest from './App/Components/MapTest';
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
            // initialRoute={{
            //         component: Main,
            //         title: 'Home',
            //     }}
            initialRoute={{
                    component: MapTest,
                    title: 'Map',
                }}
            navigationBarHidden={true}
        />
    )
  }
}

AppRegistry.registerComponent('RealEstateApp', () => RealEstateApp);
