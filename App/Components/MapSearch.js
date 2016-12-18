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

class MapSearch extends Component {

    constructor(props) {
        super(props);

        let markers = [];
        let lat_total = '';
        let lng_total = '';
        let listing_count = 0;

        props.results.map((result, index) => {

            lat_total = Number(lat_total) + Number(result.coordinates.latitude);
            lng_total = Number(lng_total) + Number(result.coordinates.longitude);

            let price_new = result.listPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
            markers.push({
                latlng: {
                    latitude: result.coordinates.latitude,
                    longitude: result.coordinates.longitude,
                },
                title: price_new, // use price?
                description: result.address.street, // use address
                listing: result
            });
            listing_count++;
        });

        lat_final = ( lat_total / listing_count );
        lng_final = ( lng_total / listing_count );

        this.state = {
            isLoading: false,
            error: false,
            city: props.city,
            listings: props.results,

            region: {
                latitude: lat_final,
                longitude: lng_final,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: markers,
        }
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
                            <PriceMarker amount={marker.title} listing={marker.listing} nav={this.props.navigator}/>
                        </MapView.Marker>
                    ))}
                </MapView>
            </View>
        )
    }
}

module.exports = MapSearch;