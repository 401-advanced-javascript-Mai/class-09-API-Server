'use strict';

// our install depandecies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// require middleware
const logRequest = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');


// our route required 
const categoriesReadyRoutes= require('../routes/categories-routes.js');
const ProductReadyRoutes =require('../routes/products-route.js');

// Prepare the express app
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// middleware use 
app.use(logRequest);
app.use(timestamp);


// routes for api 
app.use('/api/v1', categoriesReadyRoutes);
app.use('/api/v1' , ProductReadyRoutes);

// error 
app.use(error404);
app.use(error500) ;

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(` I am a live : ${PORT}`));
  },
};