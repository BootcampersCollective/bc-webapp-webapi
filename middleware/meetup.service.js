/*jshint node: true*/

'use strict';
let request = require('request');
const config = require('../config/config');

function getEvents(cb) {
	console.log('config', config);
	let options = {
		url: config.meetupUrl +
		'/2/events?&sign=true&photo-host=public&group_urlname=' +
		config.meetupGroupName + '&page=20',
		headers: {
			'User-Agent': config.meetupKey
		}
	};
	console.log('options', options)
	request(options, function (error, response, body) {
		cb(error,response,body);
	});
}

const meetupService = {
	getEvents: getEvents
};

module.exports = meetupService;