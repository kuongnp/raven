'use strict';
const helpers = require('../../helpers.js');

exports.index = {
  handler: async function (request, h) {
      //return this.navigation;
        let uri = this.api_url+'/post';
        let menus = await helpers.fetchapi(uri,'get');
        let data = {
          title: 'Post',
      	  message: 'Hello world, i\'m Jakelong new',
      	  breadcrumb:
              [
                  {title:'Post','url':'/post'},
              ],
          active_post:true,
          menus:menus
        }; 
        //return menus;
        return h.view('post/index',data);
      
  }
};

exports.new = {
    handler: function (request, h) {
        let data = {
            title: 'Add new post',
        	message: 'Add new post',
        	breadcrumb:
                [
                    {title:'Post','url':'/post'},
                    {title:'Add new post','url':'/post/new'},
                ],
            active_post:true,
        }; 
        return h.view('post/new',data);
    }
}

exports.create = {
    handler: async function (req, h) {
        let uri = this.api_url+'/menu';
        let data = {
            name: req.payload.name,
            slug: req.payload.slug
          };
        if(req.payload.item_name) {
            let item_name = req.payload.item_name;
            let item_link = req.payload.item_link;
            let items = [];
            if(Array.isArray(item_name)) {
                items = item_name.map(function(name,index){
                    return {
                        name:name,
                        link:item_link[index]
                    }
                });
            }else {
                items = [{name:item_name,link:item_link}]
            }
            data.items = items;
        }
        let result = await helpers.fetchapi(uri,'post',data);
        return h.redirect('/menu');
    }
}

exports.edit = {
    handler: async function (request, h) {
        let id = request.params.id;
        let uri = this.api_url+'/menu/'+id;
        let menu = await helpers.fetchapi(uri,'get');
        //return menu;
        let data = {
          title: 'Edit Menu',
      	  breadcrumb:
              [
                  {title:'Menu','url':'/menu'},
              ],
          active_menu:true,
          menu:menu
        };  
        return h.view('menu/edit',data);
    }
}

exports.update = {
    handler: async function (req, h) {
        let id = req.params.id;
        let uri = this.api_url+'/menu/'+id;
        
        let data = {
            name: req.payload.name,
            slug: req.payload.slug
        };
          
        if(req.payload.item_name) {
            let item_name = req.payload.item_name;
            let item_link = req.payload.item_link;
            let item_id = req.payload.item_id;
            let items = [];
            if(Array.isArray(item_name)) {
                items = item_name.map(function(name,index){
                    if(name) {
                        return {
                            _id:item_id[index],
                            name:name,
                            link:item_link[index]
                        }    
                    }
                }).filter(object => object != null);
            }else {
                items = [{_id:item_id,name:item_name,link:item_link}]
            }
            data.items = items;
        }
        //return data;
        let result = await helpers.fetchapi(uri,'put',data);
        //return result;
        return h.redirect('/menu');
          
    }
}

exports.delete = {
    handler: async function (request, h) {
        let id = request.payload.id;
        let uri = this.api_url+'/menu/'+id;
        let result = await helpers.fetchapi(uri,'delete');
        //console.log(result);
        return result;
          
    }
}

exports.edit_item = {
    handler: async function (request, h) {
        let id = request.params.id;
        let uri = this.api_url+'/menu/item/'+id;
        let menu = await helpers.fetchapi(uri,'get');
        
        let data = {
          title: 'Edit Menu Item',
      	  breadcrumb:
              [
                  {title:'Menu','url':'/menu'},
              ],
          active_menu:true,
          menu:menu
        }; 
        //return menu;
        return h.view('menu/edit_item',data);
    }
}

exports.update_item = {
    handler: async function (req, h) {
        let id = req.params.id;
        let uri = this.api_url+'/menu/item/'+id;
        let data = {
            name: req.payload.name,
            link: req.payload.link
          };
        
        if(req.payload.item_name) {
            let item_name = req.payload.item_name;
            let item_link = req.payload.item_link;
            let item_id = req.payload.item_id;
            let items = [];
            if(Array.isArray(item_name)) {
                items = item_name.map(function(name,index){
                    if(name) {
                        return {
                            _id:item_id[index],
                            name:name,
                            link:item_link[index]
                        }    
                    }
                }).filter(object => object != null);
            }else {
                items = [{_id:item_id,name:item_name,link:item_link}]
            }
            data.items = items;
        }
        let result = await helpers.fetchapi(uri,'put',data);
        //return result;
        return h.redirect('/menu');
          
    }
}

exports.delete_item = {
    handler: async function (request, h) {
        let id = request.payload.id;
        let uri = this.api_url+'/menu/item/'+id;
        let result = await helpers.fetchapi(uri,'delete');
        //console.log(result);
        return result;
          
    }
}
