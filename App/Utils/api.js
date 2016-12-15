var api = {
    getToken() {
        var url = `https://slipstream.homejunction.com/ws/api/authenticate?license=877C-0626-DE4C-54BF&version=v20160226`;
        return fetch(url).then((res) => res.json());
    },
    getListings(token, city_input) {

        let market = 'mred';
        let images = 'true';
        let details = 'true';
        let extended = 'false';
        let features = 'true';
        let page_size = '5';
        let property_type = 'Attached Single';
        let city = city_input;
        //let status = 'Pending';
        //let status = 'Active|New|Contingent|Re-activated|Price Change';
        let status = 'Active|New|Contingent|Re-activated|Price Change';
        let page_number = '1';

        // let url = 'https://slipstream.homejunction.com/ws/listings/search?market=' + market + '&listingType=residential&propertyType=Attached Single&pageSize=' + page_size + '&images=' + images + '&details=' + details + '&extended=' + extended + '&features=' + features + '&status=' + status + '&pageNumber=' + page_number;

        let url = `https://slipstream.homejunction.com/ws/listings/search?market={market}&listingType=residential&pageSize={page_size}&images={images}&details={details}&extended={extended}&features={features}&propertyType={property_type}&status={status}&city={city}`;

        console.log(url);

        // fetch('URL_GOES_HERE', {
        //     method: 'post',
        //     headers: {
        //         'Authorization': 'Basic '+btoa('username:password'),
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body: 'A=1&B=2'
        // });

        //return fetch(url).then((res) => res.json());

        return fetch(url, {
            headers: {
                'HJI-Slipstream-Token': token
            }
        }).then((res) => res.json());

    },
    // postReservations(reservation_data) {
    //
    //     var username = 'leonmagee';
    //     var password = 'G5waB0NrQ9LxPy7wx5ngw';
    //     var url = 'https://conciergereservation.com/wp-json/wp/v2/reservation';
    //     const base64 = require('base-64');
    //
    //     return fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': 'Basic ' + base64.encode(username + ":" + password),
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(reservation_data)
    //         }
    //     ).then((res) => res.json());
    // },
}

module.exports = api;