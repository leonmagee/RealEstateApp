import React, {Component} from 'react';
import SearchResults from './SearchResults';
var ReactNative = require('react-native');
var defaultStyles = require('./DefaultStyles');
var api = require('../Utils/api');
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
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
} = ReactNative;

/**
 * What to do first? Welcome screen with search input - search for properties, with some basic
 * options for San Diego?
 */

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null, // allows centering of content with image - otherwise image width is imported
        height: null,
    },
    textWrap: {
        color: '#F7F7F7',
        backgroundColor: 'transparent',
        fontSize: 30,
        textAlign: 'center',
        //marginTop: 45,
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: 1},
    },
});

var TestListing = [
    {
        address: {
            street: '9 Lee Rd.',
            city: 'Waterford',
            state: 'CT',
            zip: '06385',
        },
        baths: {
            full: 2,
        },
        sqft: 1234,
        beds: 2,
        id: '09224119',
        images: ['http://photos.mredllc.com/photos/property/119/09224119.jpg'],
        listPrice: 75000,
    },
    {
        address: {
            street: '790 Camino de la Reina',
            city: 'Waterford',
            state: 'CT',
            zip: '06385',
        },
        baths: {
            full: 2,
        },
        sqft: 934,
        beds: 2,
        id: '09224119',
        images: ['http://photos.mredllc.com/photos/property/119/09224119.jpg'],
        listPrice: 33000,
    }
];

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: false,
            city: 'San Diego',
        }
    }

    singleListing() {
        console.log('view details clicked!');
    }

    renderListings() { // goes in SearchResults file - here for design testing
        return TestListing.map((listing, index) => {
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
                    <View style={defaultStyles.addressMlsWrap}>
                        <View style={defaultStyles.addressBlock}>
                            <Text style={defaultStyles.street}>{listing.address.street}</Text>
                            <Text style={defaultStyles.addressDetails}>
                                {listing.address.city}, {listing.address.state} {listing.address.zip}
                            </Text>
                        </View>
                        <View style={defaultStyles.mlsBlock}>
                            <Text style={defaultStyles.mlsNumber}>MLS: {listing.id}</Text>
                        </View>
                    </View>
                    <View style={defaultStyles.listingDetails}>
                        <View>
                            <SvgElement svg_data={svg_beds}/>
                            <Text style={defaultStyles.detailItem}>{listing.beds} BEDS</Text>
                        </View>
                        <View>
                            <SvgElement svg_data={svg_baths}/>
                            <Text style={defaultStyles.detailItem}>{listing.baths.full} BATHS</Text>
                        </View>
                        <View>
                            <SvgElement svg_data={svg_sqft}/>
                            <Text style={defaultStyles.detailItem}>{listing.sqft} SQFT</Text>
                        </View>
                    </View>
                </View>
            )
        });
    }

    searchAPI() {
        //this.state.isLoading = true;
        //this.state.isLoading = true;
        this.setState({
            isLoading: true
        });
        //console.log('xxxxx');
        api.getToken().then((res) => {
            //console.log(res.result.token);
            //console.log(res);
            api.getListings(res.result.token).then((res) => {
                console.log(res.result.listings);
                this.setState({
                    isLoading: false
                });
                this.props.navigator.push({
                    component: SearchResults,
                    title: 'Search Results',
                    passProps: {
                        city: this.state.city,
                        results: res.result.listings
                    },
                    navigationBarHidden: false
                });
            });
        });
    }

    search() {
        this.state.isLoading = true;
        this.props.navigator.push({
            component: SearchResults,
            title: 'Search Results',
            passProps: {
                city: this.state.city,
            },
            navigationBarHidden: false
        });
        //this.state.isLoading = false;
    }

    render() {
        console.log(TestListing);
        return (
            <ScrollView>
                <View style={[defaultStyles.snippetContainer]}>
                    {this.renderListings()}
                </View>
            </ScrollView>
        )

        //
        // return (
        //     <Image source={require('../Assets/img/homepage-houses-bg.png')} style={styles.container}>
        //         <View style={styles.container}>
        //             <Text style={styles.textWrap}>Home Junction</Text>
        //             <TextInput
        //                 style={defaultStyles.input}
        //                 autoCapitalize="none"
        //                 placeholder="Enter City"
        //                 onChangeText={(city) => this.setState({city})}
        //                 autoCorrect={false}
        //             />
        //             <TouchableHighlight
        //                 style={[defaultStyles.button, defaultStyles.buttonColorBlue]}
        //                 onPress={this.search.bind(this, this.state.city)}
        //                 underlayColor="#4EB3A2">
        //                 <Text style={defaultStyles.buttonText}>Search</Text>
        //             </TouchableHighlight>
        //             <TouchableHighlight
        //                 style={[defaultStyles.button, defaultStyles.buttonColorBlue]}
        //                 onPress={() => this.searchAPI()}
        //                 underlayColor="#4EB3A2">
        //                 <Text style={defaultStyles.buttonText}>Test API</Text>
        //             </TouchableHighlight>
        //             <ActivityIndicator
        //                 animating={this.state.isLoading}
        //                 color="#FFF"
        //                 size="large"></ActivityIndicator>
        //         </View>
        //     </Image>
        // )


    }
}

module.exports = Main;