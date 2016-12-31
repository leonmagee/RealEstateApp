import React, {Component} from 'react';
import SearchResults from './SearchResults';
import MapSearch from './MapSearch';
var ReactNative = require('react-native');
var defaultStyles = require('../Styles/DefaultStyles');
var api = require('../Utils/api');

var {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
    Dimensions,
} = ReactNative;

var width = Dimensions.get('window').width;

/**
 * What to do first? Welcome screen with search input - search for properties, with some basic
 * options for San Diego?
 */

var styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null, // allows centering of content with image - otherwise image width is imported
        height: null,
    },
    homeWrap: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: width,
        flex: 1,
        paddingLeft: 55,
        paddingRight: 55,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    homeLogo: {
        resizeMode: 'contain',
        width: null, // prevents overflow issues
        height: 120,
        marginBottom: 20,
        marginRight: 10,
    },
    searchInput: {
        marginBottom: 12,
    }
});

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: false,
            //city: 'Chicago',
            city: 'San Diego',
            zip: '',
        }
    }

    searchAPI() {
        this.setState({
            isLoading: true
        });
        api.getToken().then((res) => {
            api.getListings(res.result.token, this.state.city, this.state.zip).then((res) => {
                console.log(res.result.listings);
                this.setState({
                    isLoading: false
                });
                this.props.navigator.push({
                    component: SearchResults,
                    title: 'Listings',
                    passProps: {
                        city: this.state.city,
                        results: res.result.listings
                    },
                    navigationBarHidden: false
                });
            });
        });
    }

    searchMap() {
        this.setState({
            isLoading: true
        });
        api.getToken().then((res) => {
            api.getListings(res.result.token, this.state.city, this.state.zip).then((res) => {
                console.log(res.result.listings);
                this.setState({
                    isLoading: false
                });

                this.props.navigator.push({
                    component: MapSearch,
                    title: 'Map',
                    passProps: {
                        city: this.state.city,
                        results: res.result.listings
                    },
                    navigationBarHidden: false
                });
            });
        });
    }

    render() {
        return (
            <Image source={require('../Assets/img/homepage-dark-bg.png')} style={styles.imageContainer}>
                <View style={styles.homeWrap}>
                    <Image source={require('../Assets/img/sd-search-logo-new.png')} style={styles.homeLogo}></Image>
                    <TextInput
                        style={[styles.searchInput, defaultStyles.input]}
                        autoCapitalize="none"
                        placeholder="Enter City"
                        placeholderTextColor="#777"
                        onChangeText={(city) => this.setState({city})}
                        autoCorrect={false}
                    />
                    <TextInput
                        style={[styles.searchInput, defaultStyles.input]}
                        autoCapitalize="none"
                        placeholder="Enter Zip"
                        placeholderTextColor="#777"
                        onChangeText={(zip) => this.setState({zip})}
                        autoCorrect={false}
                    />
                    <View style={defaultStyles.buttonWrap}>
                        <TouchableHighlight
                            style={[defaultStyles.button, defaultStyles.buttonColorBlue]}
                            onPress={() => this.searchAPI()}
                            underlayColor="#4EB3A2">
                            <Text style={defaultStyles.buttonText}>LISTINGS</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={[defaultStyles.button, defaultStyles.buttonColorRed]}
                            onPress={() => this.searchMap()}
                            underlayColor="#E76348">
                            <Text style={defaultStyles.buttonText}>MAP</Text>
                        </TouchableHighlight>
                    </View>
                    <ActivityIndicator
                        animating={this.state.isLoading}
                        color="#FFF"
                        size="large"></ActivityIndicator>
                </View>
            </Image>
        )
    }
}
module.exports = Main;