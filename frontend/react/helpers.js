'use strict';
const axios = require('axios');
const config = require('../../config.js');

exports.fetchapi = async function(uri,type,data={}) {
    try {
        let response;
        switch (type) {
            case 'get':
                response = await axios.get(uri);
                break;
            case 'post':
                response = await axios.post(uri, data);
                break;
             case 'put':
                response = await axios.put(uri, data);
                break;
            case 'delete':
                response = await axios.delete(uri);
                break;
        }
        
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

exports.active_theme = function() {
    let api_url = 'http://'+config.api.host+':'+config.api.port;
    let uri = api_url+'/theme/active';
    let result =  this.fetchapi(uri,'get');
    return result;
}

/*exports.get_nav =  function(nav_key) {
    let api_url = 'http://'+config.api.host+':'+config.api.port;
    let uri = api_url+'/site/nav/'+nav_key;
    let result =  this.fetchapi(uri,'get');
    return result;
}*/


