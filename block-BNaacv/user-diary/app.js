var express = require('express');
 var path = require('path');
var usersRouter = require('./routes/users');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('Server is listening at 3k');
})

