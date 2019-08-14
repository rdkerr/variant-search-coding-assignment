const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/names', (req, res) => {
  const gene_names = [
    {name: "ABC"},
    {name: "ABD"},
    {name: "ABE"},
  ];
  res.json(gene_names);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));