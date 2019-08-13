const express = require('express');

const app = express();

app.get('/names', (req, res) => {
  const gene_names = [
    {name: "ABC"},
    {name: "ABD"},
    {name: "ABE"},
  ];
  res.json(gene_names);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);