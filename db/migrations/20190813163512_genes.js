
exports.up = function(knex) {
  console.log('up')
  return knex.schema.createTable('genes', function(table) {
    table.increments();
    table.string('gene');
    table.string('nucleotide_change');
    table.string('protein_change');
    table.string('other_mappings');
    table.string('alias');
    table.string('transcripts');
    table.string('region');
    table.string('reported_classification');
    table.string('inferred_classification');
    table.string('source');
    table.string('last_evaluated');
    table.string('last_updated');
    table.string('url');
    table.string('submitter_comment');
    table.string('assembly');
    table.string('chr');
    table.string('genomic_start');
    table.string('genomic_stop');
    table.string('ref');
    table.string('alt');
    table.string('accession');
    table.string('reported_ref');
    table.string('reported_alt');
  })
};

exports.down = function(knex) {
  console.log('down')
  return knex.schema.dropTable('genes');
};
