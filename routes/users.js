var express = require('express');
var db = require('../db');

var router = express.Router();

/* POST logar pessoa. */
router.post('/login/', function (req, res, next) {
  var email = db.escape(req.body.email);
  var password = (db.escape(req.body.password)).replace(/['"]+/g, '');
  var sql = 'SELECT * FROM user WHERE email = ' + email;

  db.query(sql, function (err, rows) {
    if (err) { res.send(404, 'Couldnt get user')
    } else {
      if (rows.length == 1) {
        if (rows[0].password == password) { res.redirect('/');
      } else { res.redirect('/'); } // Email registrado, senha errada
    } else { res.redirect('/'); } // Email inexistente
    }
  })
})

// POST registra uma nova pessoa
router.post('/signup/', function (req, res) {
  var username = db.escape(req.body.username);
  var email = db.escape(req.body.email);
  var password = db.escape(req.body.password);
  // var pictureUrl = db.escape(req.body.pictureUrl)
  var pictureUrl = null;

  db.query('INSERT INTO user (nickname, email, password, pictureUrl) VALUES (' + username + ',' + email + ',' + password + ',' + pictureUrl + ')',
    function (err, result) {
      if (err) { res.send(404, 'It wasnt possible to add an user=('); }else { res.redirect('/'); }
    })
})

module.exports = router
