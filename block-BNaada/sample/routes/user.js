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

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    if(err) return next(err);
    res.render('users',{users : users})
  })
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if(err) return next(err);
    res.render('userDetails',{user : user})
  })
})

module.exports = router;
