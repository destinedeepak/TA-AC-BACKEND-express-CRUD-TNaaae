var express = require('express');
var router = express.Router();

router.get('/new', (req, res) => {
  res.send('Book Form');
});

router.post('/', (req, res) => {
  res.send('Student Form');
});

router.get('/', (req, res) => {
  let students = ["ankit", "suraj", "prashant", "ravi"];
  res.render('students', {list : students});
});

router.get('/:id', (req, res) => {
  res.render('student', {
    student: { name: 'Deepak', email: 'rahul@altcampus.io' },
  });
});

module.exports = router;
