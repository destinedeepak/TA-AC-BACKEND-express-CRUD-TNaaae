// require
var express = require('express');
var path = require('path');
var studentsRouter = require('./routes/students');

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

// routes middlewares
app.use('/students', studentsRouter);

app.use((req, res) => {
    res.status(404).send('page not found')
})

app.listen(3000, () => {
  console.log('Server is listening at 3k');
});