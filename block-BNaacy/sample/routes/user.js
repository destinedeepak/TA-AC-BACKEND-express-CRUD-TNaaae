var express = require('express');
const User = require('../model/user');
var router = express.Router();

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, product) => {
      if(err) return next(err);
      res.redirect('/users/new');
  });
});

module.exports = router;
