var express = require('express');
var db = require('../db');

var router = express.Router();

/* POST logar pessoa. */
router.post('/login/', function(req, res, next) {
  var email = db.escape(req.body.email);
  var password = (db.escape(req.body.password)).replace(/['"]+/g, '');
  var sql = 'SELECT * FROM user WHERE email = ' + email;
  //res.send(404,sql);
  db.query(sql,
  /*db.query('SELECT * FROM user WHERE user.email = "iggyazalea@gmail.com"',*/
    function(err, rows) {
      if (err) { res.send(404, 'Couldnt get user'); }
      else {
        //res.redirect('/');
        if (rows.length == 1)
        {
          if (rows[0].password == password) { res.send(404, "Acertou a senha mas o Pedro ainda não colocou a página =)");
          } else { res.redirect('/'); }
        } else { res.redirect('/'); }
      }
  })
});

//POST registra uma nova pessoa
router.post('/signup/', function(req, res) {
  var username = db.escape(req.body.username);
  var email = db.escape(req.body.email);
  var password = db.escape(req.body.password);
  //var pictureUrl = db.escape(req.body.pictureUrl);
  var pictureUrl = null;

  db.query('INSERT INTO user (nickname, email, password, pictureUrl) VALUES (' + username + ',' + email + ',' + password + ',' + pictureUrl + ')',
    function(err, result) {
      if (err) { res.send(404, 'It wasnt possible to add an user=('); }
      else { res.redirect('/'); }
  })
});

module.exports = router;
