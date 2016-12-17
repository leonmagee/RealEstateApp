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
        paddingTop: 6,
    },
    middleTitleWrap: {
        padding: 4,
        marginBottom: 5,
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
    },
    middleBoxTitle: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    extraDetails: { // wrap inside middle box
        padding: 7,
    },
    extraDetail: {
        //width: width * .45,
        marginTop: 3,
        marginBottom: 3,
        fontWeight: 'bold',
        color: '#555',
        fontSize: 13,
    },
    detailInner: {
        color: color2,
    },
    descriptionWrap: {},
    description: {
        padding: 12,
        fontStyle: 'italic',
    },
    agentDetails: {
        //alignItems: 'center',
        //paddingBottom: 15,
        padding: 7,
    },
    agentDetailsInner: {
        //width: width * .55,
    },
    agentName: {
        fontWeight: 'bold',
        color: color2,
        fontSize: 15,
    },
    agentDetail: {
        // fontWeight: 'bold',
        // color: '#555',
        marginTop: 3,
        marginBottom: 3,
        fontWeight: 'bold',
        color: '#555',
        fontSize: 13,
    },
});
module.exports = defaultStyles;