var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile(path.resolve("public/html/index.html"));
  // res.render('index', { title: 'Express' });
});
router.get('/index.html', function(req, res, next) {
	res.sendFile(path.resolve("public/html/index.html"));
  // res.render('index', { title: 'Express' });
});
router.get('/advantage.html', function(req, res, next) {
	res.sendFile(path.resolve("public/html/advantage.html"));
  // res.render('index', { title: 'Express' });
});
router.get('/about.html', function(req, res, next) {
	res.sendFile(path.resolve("public/html/about.html"));
  // res.render('index', { title: 'Express' });
});

module.exports = router;
