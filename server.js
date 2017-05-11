const express = require('express');

// MongoClient will interact with the DB
const MongoClient = require('mongodb').MongoClient;

// will parse the responses
const bodyParser = require('body-parser');

// setup the db connection
const db = require('./config/db');

// instace of express
const app = express();

// get your server up and running
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

// establish DB connection
MongoClient.connect(db.url, (err, database) => {
  if (err) { return console.log(err); }

  require('./app/routes')(app, database);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
