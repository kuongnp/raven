'use strict';

let Controller      = require('./controller');

let routes = [
      // optional parameter
      { method: 'GET', path: '/site', handler: Controller.get_site },
      { method: 'PUT', path: '/site', handler: Controller.update_site }
    ];
    
module.exports = routes;