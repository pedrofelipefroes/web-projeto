var express = require('express');
var db = require('../db');

var router = express.Router();

/* GET lista de pessoas. */
router.get('/', function(req, res, next) {
  db.query({
    sql: 'SELECT * FROM user WHERE user.email = req.body.email',
    nestTables: true
    }, function(err, rows) {
      if (err) res.status(500).send('Problema ao recuperar usuários.');

      if (rows.length == 1) { //Sucesso! Email cadastrado!
        if (rows[0].password == req.body.password) { //Password certa! \o/
          res.render('/home/', { //Home ainda não foi implementada no app.js
            users: rows,
            success: req.flash('success'),
          });
        } else {
          res.render('/', { //Senha errada! Volta para a página de login.
            error: req.flash('error')
          });
        }
      } else { //Ops! Email não cadastrado
        error: req.flash('error')
      }
  });
});

/* POST registra uma nova pessoa */
router.post('/', function(req, res) {
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
