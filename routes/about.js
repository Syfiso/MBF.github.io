const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('about', { title: 'express' });
    res.render('about', { text: 'what you on about?' })
});

module.exports = router;