'use strict';
//const helpers = require('../../helpers.js');
const Qs = require('qs');

exports.index = {
    handler: async function (request, h) {
        let uri = this.api_url+'/site';
        let site = await this.helpers.fetchapi(uri,'get');
        
        let uri2 = this.api_url+'/menu';
        let menus = await this.helpers.fetchapi(uri2,'get');
        //return site;
        let data = {
          title: 'Site',
      	  message: 'Hello world, i\'m Jakelong new',
      	  breadcrumb:
              [
                  {title:'Site','url':'/site'},
              ],
          active_site:true,
          site:site,
          menus:menus
        }; 
        return h.view('site/index',data);
    }
};

exports.update = {
    handler: async function (req, h) {
        let uri = this.api_url+'/site';
        let payload = Qs.parse(req.payload);
        
        let contact = {
            name:payload.name.trim(),
            address:payload.address.trim(),
            email:payload.email.trim(),
            phone_number:payload.phone_number.trim(),
            gmap:{latitude:payload.latitude.trim(),longitude:payload.longitude.trim()},
            social: []
        }
        if(req.payload.social_item_name) {
            let item_name = req.payload.social_item_name;
            let item_value = req.payload.social_item_value;
            let item_class = req.payload.social_item_class;
            let items = [];
            if(Array.isArray(item_name)) {
                items = item_name.map(function(name,index){
                    if(name) {
                        return {
                            item_name:name,
                            item_value:item_value[index],
                            item_class:item_class[index]
                        }    
                    }
                }).filter(object => object != null);
            }else {
                items = [{item_name:item_name,item_value:item_value,item_class:item_class}]
            }
            contact.social = items;
        }
        
        
        let nav = Object.keys(payload.nav).map(function(key) {
            let temp  = payload.nav[key].split(':');
            return {
                _id:key,
                title:temp[0],
                menu: temp[1]
            }
            
        });
        
        
        let data = {
            url: payload.url.trim(),
            title: payload.title.trim(),
            tagline: payload.tagline.trim(),
            description: payload.description.trim(),
            copyright: payload.copyright.trim(),
            logo: payload.logo.trim(),
            icon: payload.icon.trim(),
            cover_image: payload.cover_image.trim(),
            timezone: payload.timezone.trim(),
            language: payload.language.trim(),
            contact: contact,
            nav:nav
        };
        let result = await this.helpers.fetchapi(uri,'put',data);
        //return result;
        return h.redirect('/site');
    }
}


