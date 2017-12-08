/*jshint node: true*/

'use strict';
// let nodemailer = require('../middlware/nodemailer.service');
let sendgrid = require('../middleware/sendgrid.service');

exports.sendMail = function (req, res) {
    sendgrid.sendMail(req.body, function(err,res) {
        console.log('sendgrid sendMail err, res', err, res);

        res.status(res.statusCode).send(res.statusMessage);
    });

	// nodemailer.sendMail(req.body, function(err,response,data) {
    //     console.log('nodemailer sendMail data', data);
	// 	if (!err) {
	// 		res.status(200);
	// 	}
    // });

};

exports.postRegistration = function (req, res) {
    console.log('postRegistration formData');
    res.status(200).send('postRegistration');
};

exports.getGroups = function (req, res) {
    console.log('getGroups');
    res.status(200).send('getGroups');
};