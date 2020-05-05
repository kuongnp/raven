'use strict';

const config = require('./config');

let Home      = require('./modules/home');


let staticServing = {
  	handler: {
  		directory: {
  			path: ['./frontend/'+ config.key +'/assets'],
  			listing: false,
  			index: true
  		}
  	}
  };

let routes = [
      // optional parameter
      {
      	method: 'GET',
      	path: '/{somethings*}',
      	config:staticServing
      },
      { method: 'GET', path: '/', config: Home.index}
    ];
    
//exports.backend = routesBackend;
module.exports = routes;