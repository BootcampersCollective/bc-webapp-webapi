/*jshint node: true*/

'use strict';

let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let path = require('path');
let helmet = require('helmet');
let fs = require('fs');
require('dotenv').config();

let serverPort = process.env.NODE_PORT || 5010;

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

// Routes
var apiRoutes = require('./routes/api-routes');
// var router = express.Router;
app.use('/api', apiRoutes);

app.listen(serverPort);
console.log('Server started listening on ', serverPort);