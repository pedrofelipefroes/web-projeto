var express = require('express');
var db = require('../db');
var _ = require('underscore');

var router = express.Router();

//Função COPIADA de https://gomakethings.com/how-to-get-the-value-of-a-querystring-with-native-javascript/
//Retorna variáveis da querystring
var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

//GET campeonatos
router.get('/', function (req, res, next) {
  db.query('SELECT * FROM championship ', function (err, rows) {
    res.render('/', { users: _.last(rows,4); })
  }
  )
})

//GET as pessoas que participam de campeonado passado por parâmetro
router.get('/', function (req, res, next) {
  var championship = getQueryString('id');

  db.query('SELECT * FROM participate where idC = ' + championship, function (err, rows) {
    res.render('/', { users: rows })
  }
  )
})

// POST registra um novo campeonato
router.post('/register/', function (req, res) {
  var participants = db.escape(req.body.participants)
  var users = db.escape(req.body.users)

  db.query('INSERT INTO championship (participants) VALUES (' + participants + ')', function (err, result) {
    if (err) { res.send(404, 'It wasnt possible to add a championship=('); }
  })

  db.query('SELECT MAX(id) as id FROM championship', function (err, result) { //Pega o id que acabou de ser cadastrado
    if (err) { res.send(404, 'It wasnt possible to get the max(id) from championship'); }
    for (var i = 0; i < users.length; i++) {
      db.query('INSERT INTO participate (idU, idC, nivel) VALUES (' + users[i].id + ',' + result.id + ',' + '1)', function (err, result) {
        if (err) { res.send(404, 'It wasnt possible to insert championship and user into participate table'); }
      })
    })
  }
})

module.exports = router;
