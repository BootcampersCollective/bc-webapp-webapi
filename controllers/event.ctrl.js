/*jshint node: true*/

'use strict';
var meetup = require('../middleware/meetup.service');

exports.getEvents = function (req, res) {
    meetup.getEvents(function(err,response,data) {
        const object = JSON.parse(data);
        if (!err) {
            res.status(200).json(object);
        }
    });
}