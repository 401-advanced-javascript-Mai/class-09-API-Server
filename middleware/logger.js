  
'use strict';

const timestamp = require('./timestamp');
module.exports =(req,res, next)=>{
  console.log('request info :' , req.method , req.path , timestamp);
  next ();
};