var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user){
  res.render('index', { title: req.session.user[0].email });
  }else{
    res.render('admin/users/login');
  }
});

module.exports = router;
