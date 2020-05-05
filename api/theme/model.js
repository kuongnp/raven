'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const themeSchema = new Schema({
  title: { type: String, required: true },
  key:{type: String, required: true, index: { unique: true }},
  description: String,
  author: String,
  updated_at: { type: Date ,default: Date.now  },
  active: { type: Boolean, default: false },
  setting: {
    url: String,
    title: String,
    tagline: String,
    description: String,
    copyright: String,
    cover_image_enable: { type: Boolean, default: true },
    logo_enable: { type: Boolean, default: true },
    favicon_enable: { type: Boolean, default: true },
    contact: {
      name: String,
      address: String,
      email: String,
      phone: String,
      gmap: {
        api_key: String,
        iframe: String
      },
      social: [{item_name:String,item_value:String,item_class:String}]
    }
  }
});

module.exports = mongoose.model('Theme', themeSchema);