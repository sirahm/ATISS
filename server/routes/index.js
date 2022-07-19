var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});



/*GET add page. */
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Create Survey' });
});

router.get('/edit', function(req, res, next) {
  res.render('edit', { title: 'Edit Survey' });
});


router.get('/createMC', function(req, res, next) {
  res.render('createMC', { title: 'Create Multiple Choice Survey' });
});

router.get('/createSA', function(req, res, next) {
  res.render('createSA', { title: 'Create SA Survey' });
});

router.get('/createTF', function(req, res, next) {
  res.render('createTF', { title: 'Create True-False Survey' });
});



module.exports = router;
