import React, {Component} from 'react';
import SwipeImage from './SwipeImage';
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
    Image,
    TouchableHighlight,
} = ReactNative;

class SingleListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: false,
            listing: props.listing,
            image_url: props.listing.images[0].replace('http:', 'https:'),
            images: props.listing.images,
            current_image: 1,
            image_count: props.listing.images.length,
        }
    }

    nextImage() {
        let new_current_image = ( this.state.current_image + 1 );
        if (new_current_image > this.state.image_count) {
            new_current_image = 1;
        }
        this.setState({
            current_image: new_current_image,
            image_url: this.state.listing.images[( new_current_image - 1 )].replace('http:', 'https:'),
        })
    }

    renderListings() {
        let price_new = this.state.listing.listPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        let listing = this.state.listing;

        if (this.state.image_count > 1) {
            var listing_images = <SwipeImage images={this.state.images}/>;
        } else {
            var listing_images = <Image
                style={defaultStyles.listingImage}
                source={{uri: this.state.image_url}}>
                <View style={defaultStyles.listingButtonsWrap}>
                    <Text style={defaultStyles.listingImageButtonLeft}>IMAGE 1/1</Text>
                </View>
            </Image>;
        }

        return (
            <View style={defaultStyles.listingWrap}>
                {listing_images}
                <View style={defaultStyles.priceButtonBlock}>
                    <Text style={defaultStyles.price}>${price_new}</Text>
                    <Text style={defaultStyles.mls}>#{listing.id}</Text>
                </View>
                <View style={defaultStyles.addressBlockSingle}>
                    <Text style={defaultStyles.streetSingle}>{listing.address.street}</Text>
                    <Text style={defaultStyles.addressDetailsSingle}>
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
                <View style={defaultStyles.extraDetails}>
                    <Text style={defaultStyles.extraDetail}>Year Built: <Text style={defaultStyles.detailInner}>{listing.yearBuilt}</Text></Text>
                    <Text style={defaultStyles.extraDetail}>County: <Text style={defaultStyles.detailInner}>{listing.county}</Text></Text>
                    <Text style={defaultStyles.extraDetail}>Days on Market: <Text style={defaultStyles.detailInner}>{listing.daysOnMarket}</Text></Text>
                    <Text style={defaultStyles.extraDetail}>Listing Date: <Text style={defaultStyles.detailInner}>{listing.listingDate}</Text></Text>
                    <Text style={defaultStyles.extraDetail}>Type: <Text style={defaultStyles.detailInner}>{listing.listingType}</Text></Text>
                </View>
                <View style={defaultStyles.descriptionWrap}>
                    <Text style={defaultStyles.description}>{listing.description}</Text>
                </View>
                <View style={defaultStyles.agentTitleWrap}>
                    <Text style={defaultStyles.agentTitle}>AGENT DETAILS</Text>
                </View>
                <View style={defaultStyles.agentDetails}>
                    <View style={defaultStyles.agentDetailsInner}>
                        <Text style={defaultStyles.agentName}>{listing.listingAgent.name}</Text>
                        <Text style={defaultStyles.agentDetail}>{listing.listingAgent.email}</Text>
                        <Text style={defaultStyles.agentDetail}>{listing.listingAgent.phone}</Text>
                        <Text style={defaultStyles.agentDetail}>Agent ID: {listing.listingAgent.id}</Text>
                        <Text style={defaultStyles.agentDetail}>Office: {listing.listingOffice.name}</Text>
                        <Text style={defaultStyles.agentDetail}>Office ID: {listing.listingOffice.id}</Text>
                        <Text style={defaultStyles.agentDetail}>Office Phone: {listing.listingOffice.phone}</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={defaultStyles.listingContainer}>
                    {this.renderListings()}
                </View>
            </ScrollView>
        )
    }
}

module.exports = SingleListing;