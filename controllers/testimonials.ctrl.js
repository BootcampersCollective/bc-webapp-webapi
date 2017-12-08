/*jshint node: true*/

'use strict';
let testimonials = require('../data/testimonials.json');

exports.getTestimonials = function (req, res) {
    res.json(testimonials);
};