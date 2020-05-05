'use strict';
const widget = require('../../helpers.js');

exports.index = {
  handler: async function (request, h) {
      //return this.navigation;
        let uri = this.api_url+'/post';
        let widget = await this.helpers.load_widget();
        let data = {
          title: 'Widget',
      	  message: 'Hello world, i\'m Jakelong new',
      	  breadcrumb:
              [
                  {title:'Page','url':'/widget'},
              ],
          active_widget:true,
          widget:widget
        }; 
        return data;
        //return menus;
        return h.view('page/index',data);
      
  }
};