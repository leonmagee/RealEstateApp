import React, {Component} from 'react';
var ReactNative = require('react-native');
var defaultStyles = require('./DefaultStyles');

var {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    // TextInput,
    // TouchableHighlight,
    // ActivityIndicator,
} = ReactNative;

var styles = StyleSheet.create({
    // demoText: {
    //     color: 'red',
    //     fontSize: 30,
    // },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null, // allows centering of content with image - otherwise image width is imported
        height: null,
    },
});

// var testResults = [
//     {
//         address: '9 Lee Rd.',
//         city: 'Waterford',
//         state: 'CT',
//         zip: '06385',
//         beds: 3,
//         baths: 1.5,
//         sqft: 1234,
//     },
//     {
//         address: '790 Camino de la Reina',
//         city: 'San Diego',
//         state: 'CA',
//         zip: '92108',
//         beds: 2,
//         baths: 2,
//         sqft: 987,
//     },
// ];

// var testSearchResults = testResults.map((item, index ) => {
//
//     return (
//         <View key={index}>
//             <Text>Address: {item.address}</Text>
//             <Text>Beds: {item.beds}</Text>
//         </View>
//     )
// });

class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: false,
            city: props.city,
            listings: props.results,
        }
    }

    renderListings() {
        return this.state.listings.map((listing, index) => {
            let image_url = listing.images[0].replace('http', 'https');
            return (
                <View style={styles.snippetWrap} key={index}>
                    <Image
                        style={styles.listingImage}
                        source={{uri: image_url}}
                    />
                    <Text style={styles.price}>${listing.listPrice}</Text>
                    <Text style={styles.street}>Street: {listing.address.street}</Text>
                    <Text style={styles.addressDetails}>
                        {listing.address.city}, {listing.address.state} {listing.address.zip}
                    </Text>
                    <View style={styles.listingDetails}>
                        <Text style={styles.detailItem}>{listing.beds} Beds</Text>
                        <Text style={styles.detailItem}>{listing.baths.full} Baths</Text>
                    </View>
                </View>
            )
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>Top of Page</Text>
                    <Text>City: {this.state.city}</Text>
                    {this.renderListings()}
                </ScrollView>
            </View>
        )
    }
}

module.exports = SearchResults;