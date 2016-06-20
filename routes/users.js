var express = require('express');
var db = require('../db');

var router = express.Router();

/* GET lista de pessoas. */
router.get('/', function(req, res, next) {
  db.query({
    sql: 'SELECT * FROM user',
    nestTables: true
    }, function(err, rows) {
      if (err) res.status(500).send('Problema ao recuperar usuários.');

      /*res.render('listUsers', {
        users: rows,
        success: req.flash('success'),
        error: req.flash('error')
      });*/
  });
});

/* POST registra uma nova pessoa */
router.post('/', function(req, res) {
  var nickname = db.escape(req.body.nickname);
  var email = db.escape(req.body.email);
  var password = db.escape(req.body.password);
  //var pictureUrl = db.escape(req.body.pictureUrl);
  var pictureUrl = 'null';

  db.query('INSERT INTO user (username, email, password, pictureUrl) VALUES (' + nickname + ',' + email + ',' + password + ',' + pictureUrl + ')',
    function(err, result) {
      if (err) { res.send(404, 'It wasnt possible to add an user'); }
      else { console.log('Congrats :D'); res.redirect('/people/'); }
  })
});

module.exports = router;
