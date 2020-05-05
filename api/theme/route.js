'use strict';

let Controller      = require('./controller');

let routes = [
      // optional parameter
      { method: 'GET', path: '/theme', handler: Controller.list},
      { method: 'GET', path: '/theme/{id}', handler: Controller.get},
      { method: 'GET', path: '/theme/active', handler: Controller.get_active},
      { method: 'POST', path: '/theme', handler: Controller.create},
      { method: 'PUT', path: '/theme/{id}', handler: Controller.update},
      { method: 'PUT', path: '/theme/active/{id}', handler: Controller.active},
      { method: 'DELETE', path: '/theme/{id}', handler: Controller.remove}
    ];
    
module.exports = routes;