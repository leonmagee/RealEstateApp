import React, {Component} from 'react';
var ReactNative = require('react-native');
var defaultStyles = require('./DefaultStyles');

var {
    Text,
    View,
    StyleSheet,
    // Image,
    // TextInput,
    // TouchableHighlight,
    // ActivityIndicator,
} = ReactNative;

var styles = StyleSheet.create({
    demoText: {
        color: 'red',
        fontSize: 30,
    },
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
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.demoText}>Search Results!</Text>
                <Text style={styles.demoText}>City: {this.state.city}</Text>
            </View>
        )
    }
}

module.exports = SearchResults;