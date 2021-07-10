var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var userRoute = require('./routes/user');
var indexRoute = require('./routes/index');

// db connection
mongoose.connect('mongodb://localhost/userdiary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},(err)=>{
    console.log(err ? err : 'database is connected');
});

// initiating app
var app = express();

// views 
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'))

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// routes 
app.use('/' , indexRoute)
app.use('/users', userRoute);

app.listen(3000, () => {
    console.log('Server is listening at 3k');
})
