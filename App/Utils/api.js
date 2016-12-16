var api = {
    getToken() {
        //let license_key = '877C-0626-DE4C-54BF'; // Chicago
        let license_key = '2684-E2AF-6385-05BA'; // San Diego
        let slipstream_version = 'v20160226';

        let token_url = `https://slipstream.homejunction.com/ws/api/authenticate?license=${license_key}&version=${slipstream_version}`;

        return fetch(token_url).then((res) => res.json());
    },
    getListings(token, city_input = '', zip_input = '') {

        //let market = 'mred'; // Chicago
        let market = 'sandicor'; // San Diego
        //let market = 'SANDICOR'; // San Diego
        let images = 'true';
        let details = 'true';
        //let extended = 'false';
        //let features = 'false';
        let page_size = '10';
        //let property_type = 'Attached Single';
        //let property_type = '';
        let city = city_input;
        let zip = zip_input;
        //let status = 'Pending';
        //let status = 'Active|New|Contingent|Re-activated|Price Change';
        //let status = 'Active|New|Contingent|Re-activated|Price Change';
        //let page_number = '1';

        // let url = `https://slipstream.homejunction.com/ws/listings/search?market=${market}&listingType=residential&pageSize=${page_size}&images=${images}&details=${details}&extended=${extended}&features=${features}&propertyType=${property_type}&status=${status}&city=${city}`;

        let url = `https://slipstream.homejunction.com/ws/listings/search?market=${market}&listingType=residential&pageSize=${page_size}&images=${images}&details=${details}&city=${city}&zip=${zip}`;

        return fetch(url, {
            headers: {
                'HJI-Slipstream-Token': token
            }
        }).then((res) => res.json());

    },
}

module.exports = api;