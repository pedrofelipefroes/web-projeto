var express = require('express');
var db = require('../db');

var router = express.Router();

/* POST logar pessoa. */
router.post('/login/', function(req, res, next) {
  var email = db.escape(req.body.email);
  var password = db.escape(req.body.password);
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
          if (rows[0].password == password) {
              res.send(404, "Certa: " + rows[0].password + " " + password);
          } else {
            res.send(404, "Errada: " + rows[0].password + " " + password);
          }
        } else {
          res.send(404, 'Não existe: ' + rows.length + " " + password);
        }
      }
  })

  /*db.query({
    sql: ('SELECT * FROM user WHERE user.email = ' + req.body.email),
    nestTables: true
    }, function(err, rows) {
      if (err) res.status(500).send('Problema ao recuperar usuários.');

      else if (rows.length == 1) { //Sucesso! Email cadastrado!
          if (rows[0].password == req.body.password) { //Password certa! \o/
              res.send(404, 'SUCCESS \O/');

          } else {
            res.send(404, 'Senha errada :B');
            }
       } else { //Ops! Email não cadastrado
          res.send(404, 'Este email está errado! O.o');
      }
  });*/
});

/* POST registra uma nova pessoa */
/*router.post('/signup/', function(req, res) {
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
});*/

module.exports = router;
