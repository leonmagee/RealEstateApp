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
    titleWrap: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        paddingTop: 2,
        paddingBottom: 3,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 5,
        marginBottom: 25,
    },
    titleInner: {
        color: '#F7F7F7',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        // textShadowColor: '#000',
        // textShadowOffset: {width: 1, height: 1},
    },
    searchInput: {
        marginBottom: 5,
    }
});

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: false,
            //city: 'Chicago',
            city: 'Winfield',
        }
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

    render() {
        return (
            <Image source={require('../Assets/img/homepage-dark-bg.png')} style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.titleWrap}>
                        <Text style={styles.titleInner}>SEARCH SAN DIEGO</Text>
                    </View>
                    <TextInput
                        style={[styles.searchInput, defaultStyles.input]}
                        autoCapitalize="none"
                        placeholder="Enter City"
                        placeholderTextColor="#777"
                        onChangeText={(city) => this.setState({city})}
                        autoCorrect={false}
                    />
                    <TouchableHighlight
                        style={[defaultStyles.button, defaultStyles.buttonColorBlue]}
                        onPress={() => this.searchAPI()}
                        underlayColor="#4EB3A2">
                        <Text style={defaultStyles.buttonText}>SEE LISTINGS</Text>
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