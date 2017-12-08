var express = require ('express');
var auth = require ('../routes/routes');
var services = require ('../services/services');

var app = express ();

port = process.env.PORT || 3000;

app.listen (port, () => {
  console.log (`Server is up on port ${port}`);
});

services.validate ('kayyali18@gmail.com');
