'use strict';

let Dashboard      = require('./modules/dashboard');
let Theme      = require('./modules/theme');
let Menu      = require('./modules/menu');
let Site      = require('./modules/site');
let Post      = require('./modules/post');
let Page      = require('./modules/page');
let Widget      = require('./modules/widget');

let staticServing = {
      auth:false,
  	handler: {
  		directory: {
  			path: ['./backend/assets'],
  			listing: false,
  			index: true
  		}
  	}
  };
  
let themeImg = {
      auth:false,
      handler: {
            directory: {
  			path: ['./frontend'],
  			listing: false,
  			index: true
  		}
      }
}

let routes = [
      // optional parameter
      {
      	method: 'GET',
      	path: '/{somethings*}',
      	config:staticServing
      },
      {
      	method: 'GET',
      	path: '/theme/{somethings*}',
      	config:themeImg
      },
      //dashboard
      { method: 'GET', path: '/', config: Dashboard.index},
      //theme
      { method: 'GET', path: '/theme', config: Theme.index},
      { method: 'POST', path: '/theme', config: Theme.create},
      { method: 'GET', path: '/theme/{id}', config: Theme.edit},
      { method: 'POST', path: '/theme/{id}', config: Theme.update},
      { method: 'POST', path: '/theme/active', config: Theme.active},
      { method: 'GET', path: '/theme/new', config: Theme.new},
      //menu
      { method: 'GET', path: '/menu', config: Menu.index},
      { method: 'GET', path: '/menu/new', config: Menu.new},
      { method: 'POST', path: '/menu', config: Menu.create},
      { method: 'GET', path: '/menu/{id}', config: Menu.edit},
      { method: 'POST', path: '/menu/{id}', config: Menu.update},
      { method: 'POST', path: '/menu/delete', config: Menu.delete},
      { method: 'GET', path: '/menu/item/{id}', config: Menu.edit_item},
      { method: 'POST', path: '/menu/item/{id}', config: Menu.update_item},
      { method: 'POST', path: '/menu/item/delete', config: Menu.delete_item},
      //site
      { method: 'GET', path: '/site', config: Site.index},
      { method: 'POST', path: '/site', config: Site.update},
      //widget
      { method: 'GET', path: '/widget', config: Widget.index},
     /* { method: 'GET', path: '/page/new', config: Page.new},
      { method: 'POST', path: '/page', config: Page.create},
      { method: 'GET', path: '/page/{id}', config: Page.edit},
      { method: 'POST', path: '/page/{id}', config: Page.update},*/
      //post
      { method: 'GET', path: '/post', config: Post.index},
      { method: 'GET', path: '/post/new', config: Post.new},
      { method: 'POST', path: '/post', config: Post.create},
      { method: 'GET', path: '/post/{id}', config: Post.edit},
      { method: 'POST', path: '/post/{id}', config: Post.update},
      //page
      { method: 'GET', path: '/page', config: Page.index},
      { method: 'GET', path: '/page/new', config: Page.new},
      { method: 'POST', path: '/page', config: Page.create},
      { method: 'GET', path: '/page/{id}', config: Page.edit},
      { method: 'POST', path: '/page/{id}', config: Page.update}
    ];
    
module.exports = routes;