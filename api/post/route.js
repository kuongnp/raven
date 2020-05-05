'use strict';

let Controller      = require('./controller');

let routes = [
      // optional parameter
      { method: 'GET', path: '/post', handler: Controller.list},
      { method: 'GET', path: '/post/{id}', handler: Controller.get},
      { method: 'GET', path: '/post/slug/{slug}', handler: Controller.get_by_slug},
      { method: 'POST', path: '/post', handler: Controller.create},
      { method: 'PUT', path: '/post/{id}', handler: Controller.update},
      { method: 'DELETE', path: '/post/{id}', handler: Controller.remove}
    ];
    
module.exports = routes;