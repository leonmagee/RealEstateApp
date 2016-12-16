import React, {Component} from 'react';

import {
    StyleSheet,
    Dimensions,
} from 'react-native';

/**
 * Default Styles
 * @todo refactor this - remove old CR stuff
 * @todo choose new color scheme?
 */
var width = Dimensions.get('window').width;
var color1 = '#E95637'; // light red
var color2 = '#04C0C5'; // blue
var defaultStyles = StyleSheet.create({
    homeWrap: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: width,
        flex: 1,
        paddingLeft: 55,
        paddingRight: 55,
        paddingTop: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FAFAFA',
        alignSelf: 'center',
    },
    button: {
        height: 45,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        //marginBottom: 10,
        //marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    buttonColorBlue: {
        backgroundColor: '#08C5B1',
        borderColor: '#08C5B1',
    },
    buttonColorRed: {
        backgroundColor: '#E97C5F',
        borderColor: '#E97C5F',
    },
    buttonColorYellow: {
        backgroundColor: '#EFD14F',
        borderColor: '#EFD14F',
    },
    flexWrap: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    restaurants: {
        fontSize: 19,
        padding: 10,
        color: '#222',
        fontWeight: 'bold',
    },
    dot: {
        backgroundColor: '#08C5B1',
        borderRadius: 6,
        height: 12,
        width: 12,
        marginRight: 4,
    },
    separator: {
        height: 1,
        backgroundColor: '#DDD',
    },
    outerWrap: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        paddingTop: 75,
    },
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'stretch',
    },
    input: {
        height: 40,
        borderColor: '#DDD',
        borderWidth: 1,
        backgroundColor: '#F7F7F7',
        borderRadius: 5,
        paddingLeft: 10,
    },
    label: {
        fontWeight: 'bold',
        color: '#111',
        marginTop: 5,
        marginBottom: 4,
    },
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
    listingContainer: {},
    listingWrap: {},
    listingImage: {
        flex: 1,
        height: 240,
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
    mls: {
        fontSize: 17,
        color: '#444',
        paddingTop: 13,
        paddingBottom: 7,
        flex: 1,
        fontWeight: 'bold',
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
        backgroundColor: '#FAFAFA',
        borderColor: '#F4F4F4',
        borderWidth: 1,
        margin: 10,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 5,
        paddingRight: 5,
    },
    mlsNumber: {
        paddingTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#666',
    },
    street: {
        color: '#555',
        fontWeight: 'bold',
        padding: 3,
    },
    addressDetails: {
        color: '#777',
        fontWeight: 'bold',
        padding: 3,
        fontSize: 12,
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
    extraDetails: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
    },
    extraDetail: {
        flex: 1,
        fontWeight: 'bold',
        color: '#555',
        padding: 3,
    },
    description: {
        padding: 7,
        fontStyle: 'italic',
    },
    agentDetails: {
        padding: 7,
    },
    agentDetail: {
        fontWeight: 'bold',
        color: '#444',
    },
    mapContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
module.exports = defaultStyles;