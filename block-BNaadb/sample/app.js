const exp = require('constants');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');


var userRouter = require('./routes/user');
var indexRouter = require('./routes/index')

// db connection
mongoose.connect(
  'mongodb://localhost/user',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => console.log(err ? err : 'Database connected!')
);

// initiating app
var app = express();

// middlewares
app.use(express.urlencoded({extended : false}));

// views setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.use('/', indexRouter);
app.use('/users', userRouter)

// 404 error handlers 
app.use((req, res) =>{
    res.status(404).send('page nor found');
})

app.listen(3000, () => {
    console.log('Server is listening at 3k');
})
