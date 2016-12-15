import React, {Component} from 'react';
var ReactNative = require('react-native');
var defaultStyles = require('./DefaultStyles');
import MapView from 'react-native-maps';

var {
    View,
    Text,
    StyleSheet,
} = ReactNative;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

class MapTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 32.723801,
                longitude: -117.253836,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: [
                {
                    latlng: {
                        latitude: 32.723801,
                        longitude: -117.253836
                    },
                    title: 'Property 1', // use price?
                    description: 'Property Description...', // use address
                },
                {
                    latlng: {
                        latitude: 32.73991,
                        longitude: -117.254633
                    },
                    title: 'Property 2', // use price?
                    description: 'Property Description 2...', // use address
                }
            ]
        }
    }

    // latitude:32.723801
    // longitude:-117.253836
    // latitude:32.73991
    // longitude:-117.254633
    // latitude:32.726804
    // longitude:-117.244685


    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                >
                    {this.state.markers.map((marker, index) => (
                        <MapView.Marker
                            key={index}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
            </View>
        )
    }
}

module.exports = MapTest;