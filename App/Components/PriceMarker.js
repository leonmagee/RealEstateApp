import React, {Component, PropTypes} from 'react';
var SingleListing = require('./SingleListing');
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

const propTypes = {
    //amount: PropTypes.number.isRequired,
    //amount: PropTypes.isRequired,
    fontSize: PropTypes.number,
};

const defaultProps = {
    fontSize: 13,
};

class PriceMarker extends Component {

    bubbleClick(listing) {

        console.log(listing);
        var nav = this.props.nav;
        nav.push({
            component: SingleListing,
            title: listing.address.street,
            passProps: {
                listing: listing,
            },
            navigationBarHidden: false
        });
    }

    render() {
        const {fontSize, amount, listing} = this.props;
        return (
            <TouchableHighlight onPress={() => this.bubbleClick(listing)}>
                <View style={styles.container}>
                    <View style={styles.bubble}>
                        <Text style={styles.dollar}>$</Text>
                        <Text style={[styles.amount, { fontSize }]}>{amount}</Text>
                    </View>
                    <View style={styles.arrowBorder}/>
                    <View style={styles.arrow}/>
                </View>
            </TouchableHighlight>
        );
    }
}

PriceMarker.propTypes = propTypes;
PriceMarker.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    bubble: {
        flex: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        //backgroundColor: '#FF5A5F',
        backgroundColor: '#04C0C5',
        padding: 2,
        borderRadius: 3,
        //borderColor: '#D23F44',
        borderColor: '#4EB3A2',
        borderWidth: 0.5,
    },
    dollar: {
        color: '#FFFFFF',
        fontSize: 10,
    },
    amount: {
        color: '#FFFFFF',
        fontSize: 13,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'transparent',
        //borderTopColor: '#FF5A5F',
        borderTopColor: '#04C0C5',
        alignSelf: 'center',
        marginTop: -9,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'transparent',
        //borderTopColor: '#D23F44',
        borderTopColor: '#4EB3A2',
        alignSelf: 'center',
        marginTop: -0.5,
    },
});

module.exports = PriceMarker;