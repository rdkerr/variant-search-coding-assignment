var config = require('./knexfile.js');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);

const getNames = () => {
  return knex('genes')
    .select('gene')
    .distinct()
    .then(names => names);
}

const getGenes = (name) => {
  return knex('genes')
    .where('gene', name)
    .then(genes => genes);
}

module.exports = knex;
module.exports.getNames = getNames;
module.exports.getGenes = getGenes;