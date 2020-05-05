'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const widgetSchema = new Schema({
  title: { type: String, required: true}, 
  content: { type: String} 
});

module.exports = mongoose.model('Site', widgetSchema);