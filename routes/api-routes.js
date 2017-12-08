/*jshint node: true*/

'use strict';
var routes = require('express').Router();
// setting up the routes
// imports controller

var loginController = require ('../controllers/login.ctrl');
var registerController = require('../controllers/register.ctrl');
var testimonialController = require('../controllers/testimonials.ctrl');
var eventController = require('../controllers/event.ctrl');
// var projectController = require('../controllers/project.ctrl');

/*////////////////////////////////////////////////////////////////////
        BACK END routes
  ///////////////////////////////////////////////////////////*/

routes.get ('/v1/auth', loginController.get);
routes.post ('/v1/auth', loginController.post);
routes.get('/v1/register', registerController.getGroups);
routes.post('/v1/register', registerController.postRegistration);
routes.get('/v1/testimonials', testimonialController.getTestimonials);
routes.get('/v1/events', eventController.getEvents);
// routes.get('/projects', projectController.get);

module.exports = routes;