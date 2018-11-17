const path = require('path');
const express = require('express');
const app = express();

module.exports = app;

app.use('/dist', express.static(path.join(__dirname, '../dist')));

const index = path.join(__dirname, '../index.html');

app.get('/', (req, res)=> res.sendFile(index));

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(500).send({ error: err.message });
});
