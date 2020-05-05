'use strict';

let Menu      = require('./menu/controller.js');
let Site      = require('./site/controller.js');


let routes = [
      //menu
      { method: 'GET', path: '/menu', handler: Menu.list },
      { method: 'GET', path: '/menu/{id}', handler: Menu.get },
      { method: 'POST', path: '/menu', handler: Menu.create },
      { method: 'PUT', path: '/menu/{id}', handler: Menu.update },
      { method: 'DELETE', path: '/menu/{id}', handler: Menu.remove },
      { method: 'GET', path: '/menu/item/{id}', handler: Menu.get_item },
      { method: 'PUT', path: '/menu/item/{id}', handler: Menu.update_item },
      { method: 'DELETE', path: '/menu/item/{id}', handler: Menu.remove_item },

      //setting
      { method: 'GET', path: '/site', handler: Site.get_site },
      { method: 'PUT', path: '/site', handler: Site.update_site },
      { method: 'PUT', path: '/site/nav', handler: Site.update_nav },
      { method: 'GET', path: '/site/nav/{nav_key}', handler: Site.get_nav }
    ];
    
module.exports = routes;