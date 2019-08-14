
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw(`LOAD DATA LOCAL INFILE './data/variants.tsv'
    INTO TABLE invitae.genes
    FIELDS TERMINATED BY '\t'
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES
    (gene, nucleotide_change, protein_change, other_mappings, alias, transcripts, region, reported_classification, inferred_classification, source, last_evaluated, last_updated, url, submitter_comment, assembly, chr, genomic_start, genomic_stop, ref, alt, accession, reported_ref, reported_alt)
    `);
};
