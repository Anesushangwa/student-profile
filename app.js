const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connection');


const port = process.env.PORT || 7070;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb. initDb((err, mongodb) => {
  if (err) {
    console.log(` not working`);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
