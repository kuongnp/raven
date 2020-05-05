'use strict';

const helpers = require('../../helpers.js');

exports.index = {
  handler: function (request, h) {
      
   //let main_menu = helpers.get_nav('main_menu');
      //return main_menu;
     //return 'Welcome Backend Raven.vn';
    let data = {
        title: 'Life is !easy',
    	  message: 'Hello world, i\'m Jakelong new',
    }; 
    
    //load list sections
    
    
    
    return h.view('home/index',data);
  }
};