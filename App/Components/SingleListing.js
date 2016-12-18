import React, {Component} from 'react';
import SwipeImage from './SwipeImage';
var ReactNative = require('react-native');
var DateFromTimestamp = require('./DateFromTimestamp');
var singleStyles = require('../Styles/SingleListingStyles');
var SvgElement = require('./SvgElement');
var svg_baths = require('../SVG/baths.js');
var svg_beds = require('../SVG/beds.js');
var svg_sqft = require('../SVG/sqft.js');

var {
    Text,
    View,
    ScrollView,
    Image,
    //TouchableHighlight,
    ActivityIndicator,
} = ReactNative;

class SingleListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            listing: props.listing,
            image_url: props.listing.images[0].replace('http:', 'https:'),
            images: props.listing.images,
            current_image: 1,
            image_count: props.listing.images.length,
        }
    }

    // nextImage() {
    //     let new_current_image = ( this.state.current_image + 1 );
    //     if (new_current_image > this.state.image_count) {
    //         new_current_image = 1;
    //     }
    //     this.setState({
    //         current_image: new_current_image,
    //         image_url: this.state.listing.images[( new_current_image - 1 )].replace('http:', 'https:'),
    //     })
    // }

    renderListings() {
        let price_new = this.state.listing.listPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        let listing = this.state.listing;

        if (this.state.image_count > 1) {
            var listing_images = <SwipeImage images={this.state.images}/>;
        } else {
            var listing_images = <Image
                style={singleStyles.listingImage}
                source={{uri: this.state.image_url}}>
                <View style={singleStyles.listingButtonsWrap}>
                    <Text style={singleStyles.listingImageButtonLeft}>IMAGE 1/1</Text>
                </View>
            </Image>;
        }

        String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }

        const listing_type = listing.listingType.capitalize();

        return (
            <View>
                <View style={singleStyles.listingImageWrap}>
                    <View style={singleStyles.indicatorWrap}>
                        <ActivityIndicator
                            animating={this.state.isLoading}
                            style={singleStyles.indicator}
                            color="#333"
                            size="large"></ActivityIndicator>
                    </View>
                    {listing_images}
                </View>
                <View style={singleStyles.priceButtonBlock}>
                    <Text style={singleStyles.price}>${price_new}</Text>
                    <Text style={singleStyles.mls}>#{listing.id}</Text>
                </View>
                <View style={singleStyles.separator}/>
                <View style={singleStyles.addressBlock}>
                    <Text style={singleStyles.street}>{listing.address.street}</Text>
                    <Text style={singleStyles.addressDetails}>
                        {listing.address.city}, {listing.address.state} {listing.address.zip}
                    </Text>
                </View>
                <View style={singleStyles.separator}/>
                <View style={singleStyles.listingDetails}>
                    <SvgElement svg_data={svg_beds} svg_scale={0.046} svg_size={31}/>
                    <Text style={singleStyles.detailItem}>{listing.beds} BEDS</Text>
                    <SvgElement svg_data={svg_baths} svg_scale={0.045} svg_size={31}/>
                    <Text style={singleStyles.detailItem}>{listing.baths.full} BATHS</Text>
                    <SvgElement svg_data={svg_sqft} svg_scale={0.045} svg_size={31}/>
                    <Text style={singleStyles.detailItem}>{listing.size} SQFT</Text>
                </View>
                <View style={singleStyles.separator}/>
                <View style={singleStyles.middleBox}>
                    <View style={singleStyles.extraDetails}>
                        <View style={singleStyles.middleTitleWrap}>
                            <Text style={singleStyles.middleBoxTitle}>DETAILS</Text>
                        </View>
                        <Text style={singleStyles.extraDetail}>Year Built: <Text
                            style={singleStyles.detailInner}>{listing.yearBuilt}</Text></Text>
                        <Text style={singleStyles.extraDetail}>County: <Text
                            style={singleStyles.detailInner}>{listing.county}</Text></Text>
                        <Text style={singleStyles.extraDetail}>Days on Market: <Text
                            style={singleStyles.detailInner}>{listing.daysOnMarket}</Text></Text>
                        <Text style={singleStyles.extraDetail}>Listed: <Text style={singleStyles.detailInner}>
                            <DateFromTimestamp time={listing.listingDate}/>
                        </Text></Text>
                        <Text style={singleStyles.extraDetail}>Type: <Text
                            style={singleStyles.detailInner}>{listing_type}</Text></Text>
                    </View>
                    <View style={singleStyles.agentDetails}>
                        <View style={singleStyles.middleTitleWrap}>
                            <Text style={singleStyles.middleBoxTitle}>AGENT / OFFICE</Text>
                        </View>
                        <Text style={singleStyles.agentDetailHighlight}>{listing.listingAgent.name}</Text>
                        <Text style={singleStyles.agentDetail}>{listing.listingAgent.email}</Text>
                        <Text style={singleStyles.agentDetail}>Agent: {listing.listingAgent.phone}</Text>
                        <Text style={singleStyles.agentDetail}>Agent ID: #{listing.listingAgent.id}</Text>
                        <Text style={singleStyles.agentDetailHighlight}>{listing.listingOffice.name}</Text>
                        <Text style={singleStyles.agentDetail}>Office ID: #{listing.listingOffice.id}</Text>
                        <Text style={singleStyles.agentDetail}>Office: {listing.listingOffice.phone}</Text>
                    </View>
                </View>
                <View style={singleStyles.separator}/>
                <View style={singleStyles.descriptionWrap}>
                    <Text style={singleStyles.description}>{listing.description}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={singleStyles.listingContainer}>
                    {this.renderListings()}
                </View>
            </ScrollView>
        )
    }
}

module.exports = SingleListing;