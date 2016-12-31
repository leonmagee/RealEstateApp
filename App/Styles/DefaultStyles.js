import React, {Component} from 'react';

import {
    StyleSheet,
    Dimensions,
} from 'react-native';

/**
 * Default Styles
 * @todo choose new color scheme?
 */
var width = Dimensions.get('window').width;
var color1 = '#E95637'; // light red
// darker red - #E76348
var color2 = '#04C0C5'; // blue
// darker blue - #4EB3A2
var defaultStyles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FAFAFA',
        alignSelf: 'center',
    },
    buttonWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    button: {
        height: 45,
        borderWidth: 1,
        borderRadius: 8,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    buttonColorBlue: {
        backgroundColor: '#08C5B1',
        borderColor: '#08C5B1',
        marginRight: 5,
    },
    buttonColorRed: {
        backgroundColor: '#E97C5F',
        borderColor: '#E97C5F',
        marginLeft: 5,
    },
    buttonColorYellow: {
        backgroundColor: '#EFD14F',
        borderColor: '#EFD14F',
    },
    flexWrap: {
        alignItems: 'center',
        flexDirection: 'row',
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
    mapContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
module.exports = defaultStyles;