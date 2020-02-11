
'use strict';


const mongoose = require('mongoose');
// require the product schema 
/**
 * this is the schema for category 
 * place where we handle the information and organized
 */
const category = mongoose.Schema({
  name : { type: String, required: true},
},{ toObject: { virtuals: true }, toJSON: { virtuals: true },
  
});

/**
 * this clarify where the two schema connect as one virtual schema
 */
category.virtual('the_all_product', {

  ref: 'products',
  localField: 'name',
  foreignField: 'categoryType',
  justOne: false,
  
});
  
/**
   * @param { object} virtual_schema
   */
function join() {
  try {
    this.populate('the-all_product');
  }
  catch(err){ throw Error;}
}
category.pre('find', join);
category.pre('findOne', join);

module.exports = mongoose.model('category', category);