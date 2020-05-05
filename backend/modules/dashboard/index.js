'use strict';

exports.index = {
  //auth:'jwt',
  handler: function (request, h) {
     const response = h.response({text: 'You used a Token!'});
        response.header("Authorization", request.headers.authorization);
        return response;
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