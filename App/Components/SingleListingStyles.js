import React, {Component} from 'react';

import {
    StyleSheet,
    Dimensions,
} from 'react-native';

/**
 * Styles for single listing view
 */
var width = Dimensions.get('window').width;
var color1 = '#E95637'; // light red
// darker red - #E76348
var color2 = '#04C0C5'; // blue
// darker blue - #4EB3A2
var defaultStyles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#F2F2F2',
    },
    listingImageWrap: {
        backgroundColor: '#F7F7F7',
    },
    indicatorWrap: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    indicator: {
        height: 300,
    },
    listingImage: {
        flex: 1,
        height: 300,
    },
    listingButtonsWrap: {
        flex: 1,
    },
    listingImageButtonLeft: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 11,
        padding: 4,
        borderRadius: 5,
        position: 'absolute',
        bottom: 5,
        left: 5,
    },
    priceButtonBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    price: {
        fontSize: 33,
        color: color2,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 4,
        paddingBottom: 3,
        //flex: 1,
        marginLeft: 8,
    },
    mls: {
        fontSize: 20,
        color: '#777',
        paddingTop: 6,
        paddingBottom: 7,
        marginLeft: 20,
        //flex: 1,
        fontWeight: 'bold',
    },
    addressBlock: {
        paddingTop: 6,
        paddingBottom: 10,
        alignItems: 'center',
    },
    street: {
        color: '#555',
        fontWeight: 'bold',
        padding: 3,
        fontSize: 25,
    },
    addressDetails: {
        color: '#777',
        fontWeight: 'bold',
        padding: 3,
        fontSize: 20,
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
        fontSize: 15,
    },
    detailSvg: {
        marginLeft: 6,
    },
    middleBox: {
        flexDirection: 'row',
        //justifyContent: 'center',
        paddingTop: 6,
        paddingLeft: 8,
        paddingRight: 8,
    },
    middleTitleWrap: {
        padding: 4,
        marginBottom: 5,
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
    },
    middleBoxTitle: {
        fontSize: 15,
        color: '#555',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    extraDetails: {
        padding: 7,
        flex: 1,
        //maxWidth: width * .5,
    },
    extraDetail: {
        marginTop: 3,
        marginBottom: 3,
        fontWeight: 'bold',
        color: '#555',
        fontSize: 13,
    },
    detailInner: {
        color: color2,
    },
    descriptionWrap: {
        marginBottom: 10,
    },
    description: {
        padding: 12,
        fontStyle: 'italic',
    },
    agentDetails: {
        padding: 7,
        flex: 1,
    },
    agentDetailHighlight: {
        fontWeight: 'bold',
        color: color1,
        fontSize: 14,
    },
    agentDetail: {
        marginTop: 3,
        marginBottom: 2,
        fontWeight: 'bold',
        color: '#555',
        fontSize: 13,
    },
});
module.exports = defaultStyles;