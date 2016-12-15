import React, {Component} from 'react';
var ReactNative = require('react-native');
var defaultStyles = require('./DefaultStyles');
var SingleListing = require('./SingleListing');
var SvgElement = require('./SvgElement');
var svg_baths = require('../SVG/baths.js');
var svg_beds = require('../SVG/beds.js');
var svg_sqft = require('../SVG/sqft.js');

var {
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight,
} = ReactNative;

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

    singleListing(listing) {
        console.log(listing);
        this.props.navigator.push({
            component: SingleListing,
            title: listing.address.street,
            passProps: {
                listing: listing,
            },
            navigationBarHidden: false
        });
    }

    renderListings() {
        return this.state.listings.map((listing, index) => {
            let image_url = listing.images[0].replace('http', 'https');
            let price_new = listing.listPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
            return (
                <View style={defaultStyles.snippetWrap} key={index}>
                    <Image
                        style={defaultStyles.listingImage}
                        source={{uri: image_url}}
                    />
                    <View style={defaultStyles.priceButtonBlock}>
                        <Text style={defaultStyles.price}>${price_new}</Text>
                        <TouchableHighlight
                            onPress={() => this.singleListing(listing)}
                            style={defaultStyles.viewDetailsButton}
                            underlayColor="#E97C5F"
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