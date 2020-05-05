'use strict';

exports.index = {
  handler: function (request, h) {
    let data = {
        title: 'Blog',
        message: 'Hello world, i\'m Jakelong new',
        breadcrumb:
            [
                {title:'Home','url':'/'},
                {title:'Blog','url':'/blog','active':true},
            ]
    }; 
     return h.view('post/index',data);
  }
};