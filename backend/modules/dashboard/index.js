'use strict';

exports.index = {
  handler: function (request, h) {
     //return 'Welcome Backend Raven.vn';
    let data = {
        title: 'Dashboard',
    	message: 'Hello world, i\'m Jakelong new',
    	breadcrumb:
            [
                {title:'Dashboard','url':'/'},
            ],
        active_index:true
    }; 
     return h.view('dashboard/index',data);
  }
};