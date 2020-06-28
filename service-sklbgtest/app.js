const app = require('./services/express');
const express = require('express');
const moment = require('moment');
const logger = require('./services/logger');

global.appStartTime = moment();
require('dotenv-safe').config();

process.on('unhandledRejection', (err) => {
	console.error(err);
	console.log("[Unhandled Rejection] Node NOT Exiting...");
});

/**
 * Service method
 */
app.get('/', function (req, res) {
	res.send({
		version: "1.0.0",
		name: "SkoolBag Technical Test API",
		since: moment(global.appStartTime).fromNow()
	});
});

app.listen(process.env.APP_PORT, () => {
	logger.info(`server started on port ${process.env.APP_PORT} (${process.env.APP_ENV})`);
});

module.exports = app;