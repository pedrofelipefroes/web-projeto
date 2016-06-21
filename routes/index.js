var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', {

  });
});

module.exports = router;
