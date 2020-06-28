const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const v1_routes = require('../routes/v1');
require('dotenv').config();
/**
 * Express instance
 * @public
 */
const app = express();
app.use(morgan(process.env.APP_HTTP_LOG_ENV)); // request logging. dev: console | live: file
app.use(bodyParser.json()); // parse body params and attache them to req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet()); // secure apps by setting various HTTP headers
app.use(cors()); // enable CORS - Cross Origin Resource Sharing

// mount api v1 routes
app.use('/v1', v1_routes);

module.exports = app;