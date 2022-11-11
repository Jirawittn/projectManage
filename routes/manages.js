var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('manages');
});

router.get('/addProduct', function(req, res, next) {
    res.render('addProduct');
});

module.exports = router;

