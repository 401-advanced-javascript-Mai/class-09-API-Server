/* eslint-disable indent */
  
'use strict';

class Model {
  constructor(schema) {
    this.schema = schema;
  }

  jsonSchema() {
    // console.log(typeof this.schema.jsonSchema);
    return typeof this.schema.jsonSchema === 'function' ? this.schema.jsonSchema() : {};
  }
/**
 * this function get the data from for one item via id if there ni id return all of schema
 * @param {string} _id 
 */
  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }
/**
 * this function add new item (create)
 * @param {object} record 
 */
  create(record) {
    let newData = new this.schema(record);
    return newData.save();
  }
/**
 * this function update the information 
 * @param {string} _id 
 * @param {object} record 
 */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }
  /**
   * this function delete an item 
   * @param {string} _id 
   */

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;