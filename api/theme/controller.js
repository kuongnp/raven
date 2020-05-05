var Model =  require('./model');


/**
 * List Items
 */
exports.index = (req,h) => {
    return 'Welcome theme api';
}
 
exports.list = (req, h) => {
  return Model.find({}).exec().then((item) => {
    return item;
  }).catch((err) => {
    return { err: err };
  });
}

/**
 * Get Item by ID
 */
exports.get = (req, h) => {
  return Model.findById(req.params.id).exec().then((item) => {
    if(!item) return { err: 'Item not Found' };
    return item;
  }).catch((err) => {
    return { err: err };
  });
}


/**
 * POST a Item
 */
exports.create = (req, h) => {
  const theme = req.payload;
  return Model.create(theme).then(theme=>{
    return {message: "Theme created successfully", theme}
  }).catch(err=>{
    return {err:err}
  });
  
}

/**
 * PUT | Active Item by ID
 */
exports.get_active = (req, h) => {
  return  Model.findOne({"active":true}).exec().then(theme => {
      if (!theme) return { err: 'Theme not found' };
      return theme;
  }).catch(err=>{
    return {err:err}
  })
}

/**
 * PUT | Active Item by ID
 */
exports.active = (req, h) => {
  return  Model.findById(req.params.id).exec().then(theme => {
      if (!theme) return { err: 'Theme not found' };
      //reset all to inactive
      return Model.updateMany({},{active:false}).then(()=>{
          theme.active = req.payload.active;
          theme.save();
          return { message: "Theme active successfully", theme };
      })
        
  }).catch(err=>{
    console.log(err);
    return {err:err}
  })
}

/**
 * PUT | Update Item by ID
 */
/*exports.update = (req, h) => {
  return  Model.findById(req.params.id).exec().then(theme => {
      if (!theme) return { err: 'Theme not found' };
      theme = req.payload;
      theme.save();
      return { message: "Theme update successfully", theme };
      return Model.update(theme).then(()=>{
        return { message: "Theme update successfully", theme };
      })  
  }).catch(err=>{
    console.log(err);
    return {err:err}
  })
}*/


exports.update = (req, h) => {
  let id = req.params.id;
  let theme = req.payload;
  return Model.findOneAndUpdate({_id:id}, theme).exec().then((theme) => {
   return { message: "Theme update successfully", theme };
  }).catch((err) => {
    return { err: err };
  });
}

/**
 * Delete Item by ID
 */
exports.remove = (req, h) => {
  return Model.findById(req.params.id).exec().then((item)=>{
    if (!item) return { err: 'item not found' };
    item.remove();
  }).then(() => {
      return { message: "Item remove successfully" };
  }).catch((err) => {
    return { err: err };
  });
}
