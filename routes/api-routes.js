/*jshint node: true*/

'use strict';

const routes = require('express').Router();

routes.get('/testimonials', require('../controllers/testimonials.ctrl'));
routes.get('/projects', require('../controllers/projects.ctrl'));
routes.get('/calendar', require('../controllers/calendar.ctrl'));
routes.get('/events', require('../controllers/events.ctrl'));
routes.post('/register', require('../controllers/register.ctrl'));

module.exports = routes;
