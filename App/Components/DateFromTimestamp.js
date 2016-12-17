import React, {Component} from 'react';
var ReactNative = require('react-native');

var {
    Text,
} = ReactNative;

class DateFromTimestamp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timestamp: props.time,
        }
    }

    render() {

        const timestamp = Number(this.state.timestamp);
        const date_from_timestamp = new Date(timestamp);
        console.log(date_from_timestamp);

        var year = date_from_timestamp.getFullYear();
        var month = ( date_from_timestamp.getMonth() + 1 );
        var day = date_from_timestamp.getDate();

        var date_final = month + '/' + day + '/' + year;
        console.log(date_final);

        return(
            <Text>{date_final}</Text>
        )
    }

}

module.exports = DateFromTimestamp;