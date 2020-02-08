
'use strict' ;

let timestamp = (req , res , next )=>{
  let time = new Date() ;
  req.requestTime = time ;
  console.log(time);
  next();
};

module.exports = timestamp ;