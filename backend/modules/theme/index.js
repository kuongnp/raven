'use strict';
const fs = require('fs');
const path = require('path');
const folderPath = './frontend';
const Qs = require('qs');
//const helpers = require('../../helpers.js');


exports.index = {
  /*handler: function (request, h) {
    //const isDirectory = fileName => {
    //    let pathName = path.join(folderPath, fileName);
    //    return fs.lstatSync(pathName).isDirectory()
    //}
    const isNotNull = object => {
        return object != null;
    }
    
    let themes =fs.readdirSync(folderPath).map((fileName) => {
        //let config = path.join(folderPath, fileName,"config.json");
        let config = path.resolve(folderPath, fileName,"config.json");
        if (fs.existsSync(config)) {
            const info = JSON.parse(fs.readFileSync(config, 'utf8'));
            return info;
        }
    }).filter(isNotNull);
    
    //reorder arrray theme
    let active_theme = null;
    for (const [index,theme] of themes.entries()) {
        if(theme.active==true) {
            active_theme = themes[index];
            themes.splice(index,1);
            break;
        }
    }
    if(active_theme!=null) {
        themes.unshift(active_theme);    
    }
    
      
    let data = {
        title: 'Theme setting',
    	message: 'Setting theme for frontend',
    	breadcrumb:
            [
                {title:'Theme setting','url':'/theme'},
            ],
        active_theme:true,
        themes:themes
    }; 
    //return themes;
    return h.view('theme/index',data);
  }*/
  
  auth:false,
  handler: async function (req, h) {
      //return this.navigation;
        let uri = this.api_url+'/theme';
        let themes = await this.helpers.fetchapi(uri,'get');
        let data = {
          title: 'Theme',
      	  message: 'Hello world, i\'m Jakelong new',
      	  breadcrumb:
              [
                  {title:'Theme','url':'/theme'},
              ],
          active_theme:true,
          themes:themes
        }; 
        //return themes;
        return h.view('theme/index',data);
      
  }
};

exports.active = {
    /*handler: async function (request, h) {
        let active_theme = request.payload.theme;
        let themes = fs.readdirSync(folderPath).map((fileName) => {
        //let config = path.join(folderPath, fileName,"config.json");
        let config = path.resolve(folderPath, fileName,"config.json");
        if (fs.existsSync(config)) {
            const info = JSON.parse(fs.readFileSync(config, 'utf8'));
            console.log(info);
            if(info.key == active_theme) {
                info.active = true;
                //write to default config
                let info_default = JSON.stringify(info);
                let config_default = path.join(folderPath,"config.json");
                fs.writeFile(config_default, info_default, 'utf8', (err) => {
                    if (err) throw err;
                    console.log('The file config default has been saved!');
                });
                
            }else {
                info.active = false;    
            }
            let infostr = JSON.stringify(info);
            fs.writeFileSync(config, infostr, 'utf8', (err) => {
              if (err) throw err;
              console.log('The file has been saved!');
            });
            return info;
        }
    }).filter(object => object != null);
        //set nav
        await this.helpers.set_nav();
        return themes;
    }*/
    handler: async function(req, h) {
        let id = req.payload.theme;
        let uri = this.api_url+'/theme/active/'+id;
        let data = {
            active:true
        };
        let result = await this.helpers.fetchapi(uri,'put',data);
        return result;
    }
};


exports.new = {
    handler: async function (req, h) {
        let uri = this.api_url+'/menu';
        let menus = await this.helpers.fetchapi(uri,'get');
        let data = {
            title: 'Add new theme',
        	message: 'Add new theme',
        	breadcrumb:
                [
                    {title:'Theme','url':'/theme'},
                    {title:'Add new menu','url':'/theme/new'},
                ],
            active_theme:true,
            menus: menus
        }; 
        return h.view('theme/new',data);
    }
}

exports.create = {
    handler: async function (req, h) {
        let uri = this.api_url+'/theme';
        let payload = Qs.parse(req.payload);
        
        let contact = {
            name:payload.contact_name.trim(),
            address:payload.contact_address.trim(),
            email:payload.contact_email.trim(),
            phone:payload.contact_phone.trim(),
            gmap:{api_key:payload.gmap_api_key.trim(),iframe:payload.gmap_iframe.trim()},
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
        
        let section = {
            main_menu : payload.section_main_menu
        }
        let setting = {
            url:payload.setting_url.trim(),
            title:payload.setting_title.trim(),
            tagline:payload.setting_tagline.trim(),
            description:payload.setting_description.trim(),
            copyright:payload.setting_copyright.trim(),
            contact:contact,
            section:section
        }
        
        let data = {
            title: payload.title.trim(),
            key: payload.key.trim(),
            description: payload.description.trim(),
            author: payload.author.trim(),
            active: payload.active,
            setting: setting
        };
        let result = await this.helpers.fetchapi(uri,'post',data);
        //return result;
        return h.redirect('/theme');
    }
}

exports.edit = {
    handler: async function (req, h) {
        let id = req.params.id;
        let uri = this.api_url+'/theme/'+id;
        let theme = await this.helpers.fetchapi(uri,'get');
        
        if(theme.err) {
            return h.redirect('/theme');
        }
        //return menu;
        let data = {
          title: 'Edit Theme',
      	  breadcrumb:
              [
                  {title:'Theme','url':'/theme'},
              ],
          active_theme:true,
          theme:theme
        };  
        //return data;
        return h.view('theme/edit',data);
    }
}

exports.update = {
    handler: async function(req, h) {
        let id = req.params.id;
        let uri = this.api_url+'/theme/'+id;
        
        let payload = Qs.parse(req.payload);
        
        let contact = {
            name:payload.contact_name.trim(),
            address:payload.contact_address.trim(),
            email:payload.contact_email.trim(),
            phone:payload.contact_phone.trim(),
            gmap:{api_key:payload.gmap_api_key.trim(),iframe:payload.gmap_iframe.trim()},
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
        
       
        let setting = {
            url:payload.setting_url.trim(),
            title:payload.setting_title.trim(),
            tagline:payload.setting_tagline.trim(),
            description:payload.setting_description.trim(),
            copyright:payload.setting_copyright.trim(),
            contact:contact
        }
        
        let data = {
            title: payload.title.trim(),
            key: payload.key.trim().toLowerCase(),
            description: payload.description.trim(),
            author: payload.author.trim(),
            active: payload.active,
            setting: setting
        };
        
        //return data;
        
        
        let result = await this.helpers.fetchapi(uri,'put',data);
        //return result;
        return h.redirect('/theme');
    }
};
