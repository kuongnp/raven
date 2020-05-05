'use strict';

let Controller      = require('./controller');

let routes = [
      // optional parameter
      { method: 'GET', path: '/dogs', handler: Controller.list},
      { method: 'GET', path: '/dogs/{id}', handler: Controller.get},
      { method: 'POST', path: '/dogs', handler: Controller.create},
      { method: 'PUT', path: '/dogs/{id}', handler: Controller.update},
      { method: 'DELETE', path: '/dogs/{id}', handler: Controller.remove},
    ];
    
module.exports = routes;