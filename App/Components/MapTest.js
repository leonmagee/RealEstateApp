import React, {Component} from 'react';
var ReactNative = require('react-native');
//var defaultStyles = require('../Styles/DefaultStyles');
import MapView from 'react-native-maps';
//var CustomMarkerView = require('./CustomMarkerView');
var PriceMarker = require('./PriceMarker');

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
                },
                {
                    latlng: {
                        latitude: 32.726804,
                        longitude: -117.244685
                    },
                    title: 'Property 3', // use price?
                    description: 'Property Description 3...', // use address
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

    getCoordinates(coords) {
        // var coords = [
        //     {
        //         latitude: 32.723801,
        //         longitude: -117.253836
        //     },
        //     {
        //         latitude: 32.73991,
        //         longitude: -117.254633
        //     },
        //     {
        //         latitude: 32.726804,
        //         longitude: -117.244685
        //     }
        // ];

        var lat_total = '';
        var lng_total = '';

        var coords_count = coords.length;
        console.log(coords_count);

        for (var coordinate in coords) {
            console.log(coords[coordinate]);
            lat_total = Number(lat_total) + Number(coords[coordinate].latitude);
            lng_total = Number(lng_total) + Number(coords[coordinate].longitude);
        }

        lat_final = ( lat_total / coords_count );
        lng_final = ( lng_total / coords_count );

        return {
            lat: lat_final,
            lng: lng_final,
        }

        //console.log(lat_final);
        //console.log(lng_final);

    }


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
                        >
                            <PriceMarker amount={777}/>
                        </MapView.Marker>
                    ))}
                </MapView>
            </View>
        )
    }
}

module.exports = MapTest;