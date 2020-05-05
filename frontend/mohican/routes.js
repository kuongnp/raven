'use strict';

const config = require('./config');

let Home      = require('./modules/home');
let Post      = require('./modules/post');


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
      { method: 'GET', path: '/', config: Home.index},
      { method: 'GET', path: '/blog', config: Post.index}
      
      //{ method: 'GET', path: '/shop', config: Frontend.shop},
      //{ method: 'GET', path: '/contact', config: Frontend.contact},
      //{ method: 'GET', path: '/products/{id}', config: Frontend.product}
    ];
    
//exports.backend = routesBackend;
module.exports = routes;