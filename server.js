const express = require('express');

// MongoClient will interact with the DB
const MongoClient = require('mongodb').MongoClient;

// will parse the responses
const bodyParser = require('body-parser');

// instace of express
const app = express();

// get your server up and running
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});
