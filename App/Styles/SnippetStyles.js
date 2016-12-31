import React, {Component} from 'react';

import {
    StyleSheet,
    Dimensions,
} from 'react-native';

/**
 * Default Styles
 * @todo choose new color scheme?
 * @todo make variables accessible in all stylesheets by importing a separate array?
 * @todo array or object of default colors...
 */
var width = Dimensions.get('window').width;
var color1 = '#E95637'; // light red
// darker red - #E76348
var color2 = '#04C0C5'; // blue
// darker blue - #4EB3A2
/**
 * @todo move this ^^^
 */

var defaultStyles = StyleSheet.create({
    snippetContainer: {
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
    },
    snippetWrap: {
        backgroundColor: '#FFF',
        marginTop: 15,
        marginBottom: 15,
        width: width * .9,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.1,
        paddingBottom: 5,
    },
    listingImageWrap: {
        backgroundColor: '#F7F7F7',
    },
    listingImage: {
        flex: 1,
        height: 230,
    },
    indicatorWrap: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

    },
    indicator: {
        height: 230,
    },
    priceButtonBlock: {
        flexDirection: 'row',
    },
    price: {
        fontSize: 30,
        color: color2,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 4,
        paddingBottom: 3,
        flex: 1,
    },
    viewDetailsButton: {
        backgroundColor: color1,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 8,
        marginRight: 25,
        justifyContent: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    viewDetails: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    addressBlock: {
        marginTop: 1,
        marginBottom: 10,
        paddingTop: 4,
        paddingBottom: 4,
        borderTopColor: '#F2F2F2',
        borderBottomColor: '#F2F2F2',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    street: {
        color: '#555',
        fontWeight: 'bold',
        padding: 3,
        textAlign: 'center',
        fontSize: 17,
    },
    addressDetails: {
        color: '#777',
        fontWeight: 'bold',
        padding: 3,
        fontSize: 15,
        textAlign: 'center',
    },
    listingDetails: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
    },
    detailItem: {
        color: '#555',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 3,
        marginRight: 6,
        fontSize: 13,
    },
    detailSvg: {
        marginLeft: 6,
    },
});
module.exports = defaultStyles;