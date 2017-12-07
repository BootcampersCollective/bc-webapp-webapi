const sgMail = require('@sendgrid/mail');

function sendMail(req, cb) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        from: 'no-reply@bootcamperscollective.com',
        to: ['wes@bootcamperscollective.com',
        'aaron@bootcamperscollective.com',
        'scott@bootcamperscollective.com',
        'alex@bootcamperscollective.com',
        'charlie@bootcamperscollective.com'],
        subject: 'Sendgrid service test',
        html: '<p>Name: '+ req.name +'</p>' +
        '<p>Email: ' + req.email + '</p>' +
        '<p>Years Coding: ' + req.years + '</p>' +
        '<p>Back end/Front end: ' + req.stackside + '</p>' +
        '<p>Github: ' + req.github + '</p>' +
        '<p>LinkedIn: ' + req.linkedin + '</p>' +
        '<p>Team: ' + req.team + '</p>' +
        '<p>School: ' + req.school + '</p>'
    };
    sgMail.send(msg, function (err, res) {
        console.log('sgMail.send err, res', err, res);
        cb(err, res);
    });
};

const sendgridService = {
    sendMail: sendMail
};

module.exports = sendgridService;