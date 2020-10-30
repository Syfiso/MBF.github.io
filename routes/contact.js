//const express = require('express');
//const router = express.Router();

//router.get('/', function(req, res, next) {
// res.render('index', { title: 'express' });
//});

//module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', { title: 'express' });
});

module.exports = router;