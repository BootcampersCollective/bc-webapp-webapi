/*jshint node: true*/

'use strict';
let nodemailer = require('../services/nodemailer.service');
let sendgrid = require('../services/sendgrid.service');

module.exports = function (req, res) {
	// nodemailer.sendMail(req.body, function(err,response,data) {
    //     console.log('nodemailer sendMail data', data);
	// 	if (!err) {
	// 		res.status(200);
	// 	}
    // });
    sendgrid.sendMail(req.body, function(err,res) {
        console.log('sendgrid sendMail err, res', err, res);

        res.status(res.statusCode).send(res.statusMessage);
    });
};