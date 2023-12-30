const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const matches = require('./routes/matches.js');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/matches', matches)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
