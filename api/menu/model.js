'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true }, 
  link: String,
  sub:[{type: Schema.Types.ObjectId,ref: 'Item',autopopulate: true}]
});

itemSchema.plugin(require('mongoose-autopopulate'));

const menuSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, index: { unique: true } },
  items: [{type: Schema.Types.ObjectId, ref:'Item',autopopulate: true}]
});

menuSchema.plugin(require('mongoose-autopopulate'));


module.exports = {
    Menu: mongoose.model('Menu', menuSchema),
    Item: mongoose.model('Item', itemSchema)
}