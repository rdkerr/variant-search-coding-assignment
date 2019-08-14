var config = require('./knexfile.js')[environment];
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config);