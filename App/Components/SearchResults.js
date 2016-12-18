import React, {Component} from 'react';
var ReactNative = require('react-native');
//var defaultStyles = require('../Styles/DefaultStyles');
var snippetStyles = require('../Styles/SnippetStyles');
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
    ActivityIndicator,
} = ReactNative;

class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            city: props.city,
            listings: props.results,
        }
    }

    singleListing(listing) {
        //console.log(listing);
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
            let image_url = listing.images[0].replace('http:', 'https:');
            let price_new = listing.listPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
            return (
                <View style={snippetStyles.snippetWrap} key={index}>
                    <View style={snippetStyles.listingImageWrap}>
                        <View style={snippetStyles.indicatorWrap}>
                            <ActivityIndicator
                                animating={this.state.isLoading}
                                style={snippetStyles.indicator}
                                color="#333"
                                size="large"></ActivityIndicator>
                        </View>
                        <Image
                            style={snippetStyles.listingImage}
                            source={{uri: image_url}}
                        />
                    </View>
                    <View style={snippetStyles.priceButtonBlock}>
                        <Text style={snippetStyles.price}>${price_new}</Text>
                        <TouchableHighlight
                            onPress={() => this.singleListing(listing)}
                            style={snippetStyles.viewDetailsButton}
                            underlayColor="#E97C5F"
                        >
                            <Text style={snippetStyles.viewDetails}>VIEW DETAILS</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={snippetStyles.addressBlock}>
                        <Text style={snippetStyles.street}>{listing.address.street}</Text>
                        <Text style={snippetStyles.addressDetails}>
                            {listing.address.city}, {listing.address.state} {listing.address.zip}
                        </Text>
                    </View>
                    <View style={snippetStyles.listingDetails}>
                        <SvgElement svg_data={svg_beds}/>
                        <Text style={snippetStyles.detailItem}>{listing.beds} BEDS</Text>
                        <SvgElement svg_data={svg_baths}/>
                        <Text style={snippetStyles.detailItem}>{listing.baths.full} BATHS</Text>
                        <SvgElement svg_data={svg_sqft}/>
                        <Text style={snippetStyles.detailItem}>{listing.size} SQFT</Text>
                    </View>
                </View>
            )
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={snippetStyles.snippetContainer}>
                    {this.renderListings()}
                </View>
            </ScrollView>
        )
    }
}

module.exports = SearchResults;