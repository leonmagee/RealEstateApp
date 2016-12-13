import React, {Component} from 'react';

import {
    StyleSheet,
    Dimensions,
} from 'react-native';

var width = Dimensions.get('window').width;

//width: width * .8

var defaultStyles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FAFAFA',
        alignSelf: 'center',
    },
    button: {
        height: 45,
        //flex: 1,
        //flexDirection: 'row',
        //flexDirection: 'column',
        // backgroundColor: '#08C5B1',
        // borderColor: '#08C5B1',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
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
    dotColorBlue: {
        // need to build this out....
    },
    dot2: {
        backgroundColor: '#e97c5f',
        borderRadius: 5,
        height: 10,
        width: 10,
        marginRight: 4,
    },
    separator: {
        height: 1,
        backgroundColor: '#DDD',
    },
    separator2: {
        height: 0.5,
        backgroundColor: '#DEDEDE',
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
        //backgroundColor: 'transparent'
    },
    snippetContainer: {
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
    },
    snippetWrap: { // start snippets - move this to a new file?
        //backgroundColor: '#DDD',
        backgroundColor: '#FFF',
        //flexBasis: 0.9,
        marginTop: 15,
        marginBottom: 15,
        width: width * .9,
        shadowColor: 'red',
        shadowOffset: {width: 1, height: 1},
    },
    listingImage: {
        flex: 1,
        height: 200,
    },
    price: {
        fontSize: 30,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 3,
    },
    street: {
        color: '#777',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 3,
    },
    addressDetails: {
        color: '#888',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 3,
    },
    listingDetails: {
        flexDirection: 'row',
    },
    detailItem: {
        color: '#555',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        padding: 3,
    }
});

module.exports = defaultStyles;