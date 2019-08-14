const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/names', (req, res) => {
  db.getNames()
    .then(names => res.send(names));
});

app.get('/gene/:name', (req, res) => {
  db.getGenes(req.params.name)
    .then(genes => res.send(genes));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));