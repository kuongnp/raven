'use strict';
const helpers = require('../../helpers.js');

exports.index = {
  handler: async function (request, h) {
     //return 'Welcome Backend Raven.vn';
    let data = {
          title: 'Raven',
    	  message: 'Hello world, i\'m Jakelong new',
    }; 
    
    return h.view('index',data);
  }
};

exports.blog = {
  handler: function (request, h) {
     //return 'Welcome Backend Raven.vn';
    let data = {
        title: 'Blog',
        message: 'Hello world, i\'m Jakelong new',
        breadcrumb:
            [
                {title:'Home','url':'/'},
                {title:'Blog','url':'/blog','active':true},
            ]
    }; 
     return h.view('blog',data);
  }
};

exports.about = {
  handler: function (request, h) {
     //return 'Welcome Backend Raven.vn';
    let data = {
        title: 'Giới thiệu',
    	  message: 'Hello world, i\'m Jakelong new',
    	  breadcrumb:
            [
                {title:'Home','url':'/'},
                {title:'Giới thiệu','url':'/about','active':true},
            ]
    }; 
     return h.view('about',data);
  }
};

exports.shop = {
  handler: function (request, h) {
     //return 'Welcome Backend Raven.vn';
    let data = {
        title: 'Sản phẩm',
    	  message: 'Hello world, i\'m Jakelong new',
    	  breadcrumb:
            [
                {title:'Home','url':'/'},
                {title:'Sản phẩm','url':'/shop','active':true},
            ]
    }; 
     return h.view('shop',data);
  }
};

exports.contact = {
  handler: function (request, h) {
     //return 'Welcome Backend Raven.vn';
    let data = {
        title: 'Liên hệ',
    	  message: 'Hello world, i\'m Jakelong new',
    	  breadcrumb:
            [
                {title:'Home','url':'/'},
                {title:'Liên hệ','url':'/about','active':true},
            ]
    }; 
     return h.view('contact',data);
  }
};

exports.product = {
  handler: function (request, h) {
     //return 'Welcome Backend Raven.vn';
    let data = {
        title: 'Detail Sản phẩm',
    	  message: 'Hello world, i\'m Jakelong new',
    	  breadcrumb:
            [
                {title:'Home','url':'/'},
                {title:'Sản phẩm','url':'/shop'},
                {title:'Detail','url':'/products/1','active':true},
            ]
    }; 
     return h.view('product',data);
  }
};
