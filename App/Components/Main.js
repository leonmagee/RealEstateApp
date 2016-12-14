import React, {Component} from 'react';
import SearchResults from './SearchResults';
var ReactNative = require('react-native');
var defaultStyles = require('./DefaultStyles');
var api = require('../Utils/api');

var {
    Text,
    View,
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

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: false,
            city: 'Winfield',
        }
    }

    singleListing() {
        console.log('view details clicked!');
    }

    searchAPI() {
        this.setState({
            isLoading: true
        });
        api.getToken().then((res) => {
            api.getListings(res.result.token, this.state.city).then((res) => {
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

    render() {

        return (
            <Image source={require('../Assets/img/homepage-houses-bg.png')} style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.textWrap}>Home Junction</Text>
                    <TextInput
                        style={defaultStyles.input}
                        autoCapitalize="none"
                        placeholder="Enter City"
                        onChangeText={(city) => this.setState({city})}
                        autoCorrect={false}
                    />
                    <TouchableHighlight
                        style={[defaultStyles.button, defaultStyles.buttonColorBlue]}
                        onPress={() => this.searchAPI()}
                        underlayColor="#4EB3A2">
                        <Text style={defaultStyles.buttonText}>Search</Text>
                    </TouchableHighlight>
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