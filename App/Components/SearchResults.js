import React, {Component} from 'react';
var ReactNative = require('react-native');
var defaultStyles = require('./DefaultStyles');
var SvgElement = require('./SvgElement');
var svg_baths = require('../SVG/baths.js');
var svg_beds = require('../SVG/beds.js');
var svg_sqft = require('../SVG/sqft.js');

var {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    // TextInput,
    TouchableHighlight,
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
                <View style={defaultStyles.snippetWrap} key={index}>
                    <Image
                        style={defaultStyles.listingImage}
                        source={{uri: image_url}}
                    />
                    <View style={defaultStyles.priceButtonBlock}>
                        <Text style={defaultStyles.price}>${listing.listPrice}</Text>
                        <TouchableHighlight
                            onPress={() => this.singleListing()}
                            style={defaultStyles.viewDetailsButton}
                        >
                            <Text style={defaultStyles.viewDetails}>VIEW DETAILS</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={defaultStyles.addressBlock}>
                        <Text style={defaultStyles.street}>{listing.address.street}</Text>
                        <Text style={defaultStyles.addressDetails}>
                            {listing.address.city}, {listing.address.state} {listing.address.zip}
                        </Text>
                    </View>
                    <View style={defaultStyles.listingDetails}>
                        <SvgElement svg_data={svg_beds}/>
                        <Text style={defaultStyles.detailItem}>{listing.beds} BEDS</Text>
                        <SvgElement svg_data={svg_baths}/>
                        <Text style={defaultStyles.detailItem}>{listing.baths.full} BATHS</Text>
                        <SvgElement svg_data={svg_sqft}/>
                        <Text style={defaultStyles.detailItem}>{listing.size} SQFT</Text>
                    </View>
                </View>
            )
        });
    }

    //
    // renderListings() {
    //     return this.state.listings.map((listing, index) => {
    //         let image_url = listing.images[0].replace('http', 'https');
    //         return (
    //             <View style={styles.snippetWrap} key={index}>
    //                 <Image
    //                     style={styles.listingImage}
    //                     source={{uri: image_url}}
    //                 />
    //                 <Text style={styles.price}>${listing.listPrice}</Text>
    //                 <Text style={styles.street}>Street: {listing.address.street}</Text>
    //                 <Text style={styles.addressDetails}>
    //                     {listing.address.city}, {listing.address.state} {listing.address.zip}
    //                 </Text>
    //                 <View style={styles.listingDetails}>
    //                     <Text style={styles.detailItem}>{listing.beds} Beds</Text>
    //                     <Text style={styles.detailItem}>{listing.baths.full} Baths</Text>
    //                 </View>
    //             </View>
    //         )
    //     });
    // }

    render() {
        return (
            <ScrollView>
                <View style={defaultStyles.snippetContainer}>
                    {this.renderListings()}
                </View>
            </ScrollView>
        )
    }
}

module.exports = SearchResults;