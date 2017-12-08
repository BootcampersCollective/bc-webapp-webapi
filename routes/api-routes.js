/*jshint node: true*/

'use strict';
var routes = require('express').Router();
// setting up the routes
// imports controller

var loginController = require ('../controllers/login.ctrl');
var registerController = require('../controllers/register.ctrl');

/*////////////////////////////////////////////////////////////////////
        BACK END routes
  ///////////////////////////////////////////////////////////*/

routes.get ('/v1/auth', loginController.get);
routes.post ('/v1/auth', loginController.post);
routes.get('/v1/register', registerController.getGroups);
routes.post('/v1/register', registerController.postRegistration);
// routes.get('/testimonials', require('../controllers/testimonials.ctrl'));
// routes.get('/projects', require('../controllers/projects.ctrl'));
// routes.get('/calendar', require('../controllers/calendar.ctrl'));
// routes.get('/events', require('../controllers/events.ctrl'));

module.exports = routes;