'use strict';

////// the information was in the starter code in the lab , but i devided it  


const express = require('express');
const router = express.Router();

const products = require('../models/categoriesAndProductModel/product-model');



// Routes
router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.post('/products', postProducts);
router.put('/products/:id', putProducts);
router.delete('/products/:id', deleteProducts);




function getProducts(req, res, next) {
  // expects an array of objects back
  products.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch(next);
}
  
function getProduct(req, res, next) {
  // expects an array with one object in it
  products.get(req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch(next);
}
  
function postProducts(req, res, next) {
  // expects the record that was just added to the database
  products.create(req.body)
  // console.log('req.body', req.body)
    .then(result =>res.status(201).json(result))
    
    .catch(next);
}
  
  
function putProducts(req, res, next) {
  // expects the record that was just updated in the database
  products.update(req.params.id, req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}
  
function deleteProducts(req, res, next) {
  // Expects no return value (the resource should be gone)
  products.delete(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(next);
}

module.exports = router ;