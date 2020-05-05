'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const themeSchema = new Schema({
  title: { type: String, required: true },
  key:{type: String, required: true, index: { unique: true }},
  description: String,
  updated_at: { type: Date ,default: Date.now  },
  active: { type: Boolean, default: false }
});

module.exports = mongoose.model('Theme', themeSchema);