'use strict';
const axios = require('axios');
const config = require('../config.js');
const fs = require('fs');
const path = require('path');
const folderPath = './frontend';
const frontend = require('../frontend/index')

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

exports.set_nav = function() {
    const isNotNull = object => {
        return object != null;
    }
    let themes = fs.readdirSync(folderPath).map((fileName) => {
        let config = path.resolve(folderPath, fileName,"config.json");
        if (fs.existsSync(config)) {
            const info = JSON.parse(fs.readFileSync(config, 'utf8'));
            if(info.active==true) {
                return info;    
            }
        }
    }).filter(isNotNull);
    let nav = themes[0].nav;
    let api_url = 'http://'+config.api.host+':'+config.api.port;
    let uri = api_url+'/site/nav';
    let data = {
            nav:nav
        };
        //return data;
    let result = this.fetchapi(uri,'put',data);
    return result;
}

exports.load_widget = function() {
    return frontend.widget();
}

exports.set_section = function() {
    
}


