
'use strict';


const mongoose = require('mongoose');

const category = mongoose.Schema({
  name : { type: String, required: true},
},{ toObject: { virtuals: true }, toJSON: { virtuals: true },
  
});

category.virtual('the_all_product', {

  ref: 'products',
  localField: 'name',
  foreignField: 'categoryType',
  justOne: false,
  
});
  
  
function join() {
  try {
    this.populate('the-all_product');
  }
  catch(err){ throw Error;}
}
category.pre('find', join);
category.pre('findOne', join);

module.exports = mongoose.model('category', category);