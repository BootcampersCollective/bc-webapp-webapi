/*jshint node: true*/

'use strict';
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

function sendMail(req, cb) {
    const options = {
        auth: {
            api_user: process.env.SENDGRID_USER,
            api_key: process.env.SENDGRID_PASS
        }
    };
    console.log('nodemailService req', req, options);
    let transporter = nodemailer.createTransport(sgTransport(options));

    const mailOptions = {
        from: 'no-reply@bootcamperscollective.com',
        to: 'wes@bootcamperscollective.com',
        subject: 'NodeMailer test',
        html: '<p>Name: '+ req.name +'</p>' +
        '<p>Email: ' + req.email + '</p>' +
        '<p>Years Coding: ' + req.years + '</p>' +
        '<p>Back end/Front end: ' + req.stackside + '</p>' +
        '<p>Github: ' + req.github + '</p>' +
        '<p>LinkedIn: ' + req.linkedin + '</p>' +
        '<p>Team: ' + req.team + '</p>' +
        '<p>School: ' + req.school + '</p>'
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log('err', err);
        } else {
            console.log('info', info);
        }
        cb(err, info);
    });
}

const nodemailService = {
	sendMail: sendMail
};

module.exports = nodemailService;