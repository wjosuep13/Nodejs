var express = require('express');
var app = express();

const Buffer = require('buffer').Buffer;
const path = require('path');
const fs = require('fs');


/**
 * @param  {string} base64str
 * @param  {string} filename
 */
//function decode_base64(base64str, filename) {
//  let buf = Buffer.from(base64str, 'base64');

 // fs.writeFile(path.join(__dirname, '/public/', filename), buf, function(error) {
  //  if (error) {
    //  throw error;
  //  } else {
   //   console.log('File created from base64 string!');
    //  return true;
   // }
//  });
//}


app.get('/:img',function(req,res) {
    var img2 =req.params.img;
    
	var newimg=img2.replace(/-/g,'/');
	res.send(newimg);
	//decode_base64(newimg,'img.jpg');
});
app.listen(process.env.PORT || 3000);
