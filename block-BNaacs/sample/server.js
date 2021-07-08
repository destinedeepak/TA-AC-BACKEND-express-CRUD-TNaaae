// require
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

// initiating app
var app = express();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.locals.message = 'Hello World';
  next();
});

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server is listening at 3k');
});
