var express = require('express');
var router = express.Router();
var User = require('../model/user');

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/', (req, res, next) => {
  req.body.hobbies = req.body.hobbies.split(',')
  .map((ele) => ele.trim());
  User.create(req.body, (err, user) => {
    if(err) return next(err);
    res.redirect(`/users/${user._id}`);
  });
});

router.get('/', (req, res, next) => {
  User.find({}, (err, products) => {
    if (err) return next(err);
    res.render('users', { users: products });
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, product) => {
    if (err) return next(err);
    res.render('userdetails', { user: product });
  });
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, product) => {
    if (err) return next(err);
    res.render('editUser', { user: product });
  });
});

router.post('/:id/update', (req, res, next) => {
  let id = req.params.id;
  req.body.hobbies = req.body.hobbies.split(',')
  .map((ele) => ele.trim());
  User.findByIdAndUpdate(id, req.body, (err, product) => {
    if (err) return next(err);
    res.redirect(`/users/${id}`);
  });
});

router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, product) => {
    if (err) return next(err);
    res.redirect(`/users`);
  });
});

module.exports = router;
