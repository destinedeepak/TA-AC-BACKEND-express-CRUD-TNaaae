var express = require('express');
var router = express.Router();

router.get('/',(req, res)=>{
    res.locals.list = ["Deepak","Manish","himanshu"];
    res.render('users');
})

module.exports = router;