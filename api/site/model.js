'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const siteSchema = new Schema({
    _id: String,
    url: { type: String }, 
    title: { type: String }, 
    tagline: { type: String }, 
    description: String,
    copyright: String, 
    logo: String,
    icon: String,
    cover_image: String,
    timezone: String,
    language: String,
    contact: {
        name: String,
        address: String,
        phone_number: String,
        email: String,
        gmap: {latitude:String,longitude:String},
        social: [{item_name:String,item_value:String,item_class:String}]
    },
    nav: [{
        _id: String,
        title: String,
        menu:{type: Schema.Types.ObjectId, ref:'Menu',autopopulate: true}
    }]
  }
);
siteSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Site', siteSchema);