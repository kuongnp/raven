'use strict';
const axios = require('axios');
const config = require('../config.js');

exports.active_theme = async()=>{
        let api_url = 'http://'+config.api.host+':'+config.api.port;
        let uri = api_url+'/theme/active';
        let response = await axios.get(uri);
        return response.data;
}