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
    res.render('/', { users: _.last(rows,4) })
  }
  )
})

//GET as pessoas que participam de campeonado passado por parâmetro
router.get('/', function (req, res, next) {
  var championship = getQueryString('id');

  db.query('SELECT * FROM participate where idC = ' + championship, function (err, rows) {
    res.render('/', { users: rows });
  }
  )
});

// POST registra um novo campeonato
router.post('/register/', function (req, res) {
  var name = db.escape(req.body.champname)
  var participants = db.escape(req.body.participants)

  db.query('INSERT INTO championship (participants, name) VALUES (' + participants + ',' + name + ')', function (err, result) {
    if (err) { res.send(404, 'It wasnt possible to add a championship=('); }
    res.render('../../#/home');
    })
});

module.exports = router;
