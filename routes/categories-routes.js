  
'use strict';

////// the information was in the starter code in the lab , but i devided it  

const express = require ('express');



const categories = require('../models/categoriesAndProductModel/categories-model.js');
const router = express.Router();



// Routes
router.get('/categories', getCategories);
router.get('/categories/:id', getCategory);
router.post('/categories', postCategories);
router.put('/categories/:id', putCategories);
router.delete('/categories/:id', deleteCategories);

/**
 * This function get the information after acsses route and send the result as object 
 * which means reterive all items
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */

// ROUTE function which handle the information 
function getCategories(req, res, next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch(next);
}

/**
 * this function get an one item 
 * which mean retrive one item
 * @param {object} req 
 * @param {object} res 
 * @param {functions} next 
 */
function getCategory(req, res, next) {
  // expects an array with the one matching record from the model
  categories.get(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(next);
}

/**
 * this functions create an item and add to database
 * @param {object} req 
 * @param {object} res 
 * @param {functions} next 
 */
function postCategories(req, res, next) {
  // expects the record that was just added to the database
  categories.create(req.body)
    .then(result => res.status(201).json(result))
    .catch(next);
}

/**
 * this function can update (change )the information in database 
 * @param {object} req 
 * @param {object} res 
 * @param {functions} next 
 */
function putCategories(req, res, next) {
  // expects the record that was just updated in the database
  categories.update(req.params.id, req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}


/**
 * this function delete an item 
 * @param {object} req 
 * @param {object} res 
 * @param {functions} next 
 */


function deleteCategories(req, res, next) {
  // Expects no return value (resource was deleted)
  categories.delete(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(next);
}

module.exports = router;