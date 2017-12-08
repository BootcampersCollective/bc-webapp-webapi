/*jshint node: true*/

'use strict';
var routes = require('express').Router();
// setting up the routes
// imports controller

var loginController = require ('../controllers/login.ctrl');
var registerController = require('../controllers/register.ctrl');
var testimonialController = require('../controllers/testimonials.ctrl');
var eventController = require('../controllers/events.ctrl');

/*////////////////////////////////////////////////////////////////////
        BACK END routes
  ///////////////////////////////////////////////////////////*/

routes.get ('/v1/auth', loginController.get);
routes.post ('/v1/auth', loginController.post);
routes.get('/v1/register', registerController.getGroups);
routes.post('/v1/register', registerController.postRegistration);
routes.get('/v1/testimonials', testimonialController.getTestimonials);
routes.get('/events', eventController.getEvents);
// routes.get('/projects', require('../controllers/projects.ctrl'));
// routes.get('/calendar', require('../controllers/calendar.ctrl'));

module.exports = routes;