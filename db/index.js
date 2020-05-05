'use strict';
const Mongoose = require('mongoose'),
  Config = require('../config.js');

exports.plugin = {
    name: 'db',
    version: '1.0.0',
    register: async function (server, options) {
        
        try {
            await Mongoose.connect('mongodb://' + Config.database.host + ':' + Config.database.port + '/' + Config.database.db,{ useNewUrlParser: true });  
            console.log("Connection with database succeeded.");    
        } catch (err) {
             console.log(err);
             process.exit(1);
        }
    }
};