'use strict';
const fs = require('fs');
const path = require('path');
const folderPath = './frontend';
//const helpers = require('../../helpers.js');


exports.index = {
  handler: function (request, h) {
   /* const isDirectory = fileName => {
        let pathName = path.join(folderPath, fileName);
        return fs.lstatSync(pathName).isDirectory()
    }*/
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
  }
};

exports.setactive = {
    handler: async function (request, h) {
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
    }
};


