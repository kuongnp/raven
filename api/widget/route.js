'use strict';

let Controller      = require('./controller');

let routes = [
      // optional parameter
      { method: 'GET', path: '/menu', handler: Controller.list},
      { method: 'GET', path: '/menu/{id}', handler: Controller.get},
      { method: 'POST', path: '/menu', handler: Controller.create},
      { method: 'PUT', path: '/menu/{id}', handler: Controller.update},
      { method: 'DELETE', path: '/menu/{id}', handler: Controller.remove},
      
      
      { method: 'GET', path: '/menu/item/{id}', handler: Controller.get_item},
      //{ method: 'POST', path: '/menu/item', handler: Controller.create}
      { method: 'PUT', path: '/menu/item/{id}', handler: Controller.update_item},
      { method: 'DELETE', path: '/menu/item/{id}', handler: Controller.remove_item},
    ];
    
module.exports = routes;