var Model =  require('./model');

/*exports.get_site = (req, h) => {
  return Model.find({_id:'site'}).exec().then((site) => {
    return site;
  }).catch((err) => {
    return { err: err };
  });
}*/

exports.get_site = (req, h) => {
  return Model.findById('site').exec().then((site) => {
    if(!site) return { message: 'Site not Found' };
    return site;
  }).catch((err) => {
    return { err: err };
  });
}

exports.update_site = (req, h) => {
  
  let site = {};
  //site._id = 'site';
  site.url =  req.payload.url;
  site.title = req.payload.title;
  site.tagline = req.payload.tagline;
  site.description = req.payload.description;
  site.copyright = req.payload.copyright;
  site.logo = req.payload.logo;
  site.icon = req.payload.icon;
  site.cover_image = req.payload.cover_image;
  site.timezone = req.payload.timezone;
  site.language = req.payload.language;
  site.contact = req.payload.contact;
  site.nav = req.payload.nav;
  
  return Model.findOneAndUpdate({_id:'site'}, site, {upsert:true}).exec().then((site) => {
   return { message: "Site update successfully", site };
  }).catch((err) => {
    return { err: err };
  });
 
}

exports.update_nav = (req, h) => {
  let site = {};
  site.nav = req.payload.nav;
  return Model.findOneAndUpdate({_id:'site'}, site, {upsert:true}).exec().then((site) => {
   return { message: "Site update successfully", site };
  }).catch((err) => {
    return { err: err };
  });
}

exports.get_nav = (req, h) => {
  try {
    return Model.findById('site').exec().then((site)=>{
       return site.nav.id(req.params.nav_key).menu.items;
     })
  } catch (err) {
    return { err: err };
  }
}